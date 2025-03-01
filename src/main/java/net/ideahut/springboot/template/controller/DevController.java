package net.ideahut.springboot.template.controller;

import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.ideahut.springboot.annotation.Public;
import net.ideahut.springboot.api.ApiConsumerRequest;
import net.ideahut.springboot.api.ApiConsumerService;
import net.ideahut.springboot.helper.ErrorHelper;
import net.ideahut.springboot.helper.ObjectHelper;
import net.ideahut.springboot.helper.WebMvcHelper;
import net.ideahut.springboot.object.Result;
import net.ideahut.springboot.rest.RestMethod;
import net.ideahut.springboot.rest.RestRequest;
import net.ideahut.springboot.rest.RestResponse;
import net.ideahut.springboot.sysparam.SysParamHandler;
import net.ideahut.springboot.sysparam.SysParamUpdater;
import net.ideahut.springboot.sysparam.dto.SysParamDto;

/*
 * Endpoint untuk kebutuhan DEVELOPMENT
 * Hapus / nonaktifkan jika tidak diperlukan
 */
@ComponentScan
@RestController
@RequestMapping("/dev")
class DevController {
	
	private static final String SYSTEM_CODE = "API_TOKEN";
	
	private final SysParamHandler sysParamHandler;
	private final ApiConsumerService apiConsumerService;
	
	@Autowired
	DevController(
		SysParamHandler sysParamHandler,
		ApiConsumerService apiConsumerService
	) {
		this.sysParamHandler = sysParamHandler;
		this.apiConsumerService = apiConsumerService;
	}
	
	/*
	 * Meminta token API consumer untuk melakukan request
	 * Token akan disimpan di SysParams, sysCode = "API_TOKEN", paramCode = <API_NAME>
	 */
	@Public
	@PostMapping("/api/token")
	void apiToken(
		@RequestParam("apiName") String apiName
	) {
		String token = apiConsumerService.token(apiName);
		if (token != null && !token.isEmpty() && ObjectHelper.isInstance(SysParamUpdater.class, sysParamHandler)) {
			((SysParamUpdater) sysParamHandler).updateSysParam(
				SysParamDto.create()
				.setSysCode(SYSTEM_CODE)
				.setParamCode(apiName)
				.setValue(token)
			);
		}
	}

	/*
	 * Proxy request ke Api Service lain
	 * - menggunakan API consumer token yang tersimpan di SysParam
	 * - semua http method diijinkan
	 * 
	 */
	@Public
	@RequestMapping(
		path = "/api/request/{apiName}/**", 
		method = { 
			RequestMethod.GET, 
			RequestMethod.POST, 
			RequestMethod.PUT, 
			RequestMethod.DELETE,
			RequestMethod.HEAD,
			RequestMethod.PATCH,
			RequestMethod.TRACE
		}
	)
	byte[] apiRequest(
		HttpServletRequest httpRequest,
		HttpServletResponse httpResponse,
		@PathVariable("apiName") String apiName
	) {
		// replace prefix path, dan path sisanya akan diappend ke base url service yang dituju
		String path = httpRequest
		.getServletPath()
		.replace("/dev/api/request/" + apiName, "");
		String token = sysParamHandler.getValue(String.class, SYSTEM_CODE, apiName, "");
		ErrorHelper.throwIf(token.isEmpty(), "Token not found for api: " + apiName);
		RestRequest restRequest = new RestRequest()
		.setPath(path)
		.setMethod(RestMethod.valueOf(httpRequest.getMethod().toUpperCase()))
		.setQueryString(httpRequest.getQueryString());
		Enumeration<String> en = httpRequest.getHeaderNames();
		if (en != null) {
			while (en.hasMoreElements()) {
				String httpHeaderName = en.nextElement();
				Enumeration<String> httpHeaderValues = httpRequest.getHeaders(httpHeaderName);
				if (httpHeaderValues != null) {
					restRequest.setHeaderValues(httpHeaderName, Collections.list(httpHeaderValues));
				}
			}
		}
		ObjectHelper.callOrElse(
			!RestMethod.GET.equals(restRequest.getMethod()), 
			() -> {
				byte[] requestBody = WebMvcHelper.getBodyAsBytes(httpRequest);
				restRequest.setBody(requestBody);
				return null;
			}, 
			() -> {
				restRequest.getHeaders().remove(HttpHeaders.CONTENT_LENGTH);
				return null;
			}
		);
		ApiConsumerRequest apiConsumerRequest = new ApiConsumerRequest()
		.setApiName(apiName)
		.setToken(token)
		.setRequest(restRequest);
		RestResponse restResponse = apiConsumerService.call(apiConsumerRequest);
		for (String restHeaderName : restResponse.getHeaderNames()) {
			List<String> restHeaderValues = restResponse.getHeaderValues(restHeaderName);
			for (String restHeaderValue : restHeaderValues) {
				httpResponse.addHeader(restHeaderName, restHeaderValue);
			}
		}
		return restResponse.getBodyAsByteArray();
	}
	
	/*
	 * Contoh multipart
	 */
	@PostMapping(value = "/multipart")
	Result receive(
		@RequestParam(name = "name") String name,
		@RequestParam(name = "file") MultipartFile file
	) throws Exception {
		return Result.success()
		.setInfo("name", name)
		.setInfo("length", file.getBytes().length)
		.setInfo("filename", file.getOriginalFilename());
	}
	
}
