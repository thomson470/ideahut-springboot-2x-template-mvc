package net.ideahut.springboot.template;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import lombok.extern.slf4j.Slf4j;
import net.ideahut.springboot.admin.AdminHandler;
import net.ideahut.springboot.context.RequestContext;
import net.ideahut.springboot.helper.ErrorHelper;
import net.ideahut.springboot.helper.FrameworkHelper;
import net.ideahut.springboot.helper.ObjectHelper;
import net.ideahut.springboot.object.Result;
import net.ideahut.springboot.template.properties.AppProperties;

/*
 * 1. Untuk menghandle semua error yang terjadi di aplikasi
 *    - Method: handleAllException()
 *    
 * 2. Membuat semua response ke class net.ideahut.springboot.object.Result
 *    - Method: beforeBodyWrite()
 * 
 */

@Slf4j
@ControllerAdvice
public class AppAdvice implements ResponseBodyAdvice<Object> {
	
	private final AppProperties appProperties;
	private final AdminHandler adminHandler;
	
	@Autowired
	AppAdvice(
		AppProperties appProperties,
		AdminHandler adminHandler
	) {
		this.appProperties = appProperties;
		this.adminHandler = adminHandler;
	}
	
	@ExceptionHandler
    @ResponseStatus(code = HttpStatus.OK)
    @ResponseBody
    public Result handleAllException(
    	HttpServletRequest request,
    	Throwable throwable
    ) {
		if (request.getServletPath().startsWith(adminHandler.getWebPath())) {
			// kasus: 
			// - Broken pipe, jika resource tidak tersedia
			// - MediaType unsupported, contoh untuk Accept: image/*
			return null;
		} else {
			if (Boolean.TRUE.equals(appProperties.getLogAllError())) {
	    		log.error(AppAdvice.class.getSimpleName(), throwable);
	    	}
			return FrameworkHelper.getErrorAsResult(throwable);
		}
    }

	@Override
	public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
		return true;
	}

	@Override
	public Object beforeBodyWrite(
		Object body, 
		MethodParameter returnType, 
		MediaType selectedContentType,
		Class<? extends HttpMessageConverter<?>> selectedConverterType, 
		ServerHttpRequest request,
		ServerHttpResponse response
	) {
		if (ObjectHelper.isInstance(byte[].class, body)) {
			RequestContext.destroy();
			try {
				byte[] bytes = (byte[]) body;
				response.getBody().write(bytes);
			} catch (Exception e) {
				throw ErrorHelper.exception(e);
			}
			return null;
		}
		Result result = null;
		if (ObjectHelper.isInstance(Result.class, body)) {
			result = (Result) body;
			result.updateTime();
		} else {
			result = Result.success(body);
		}
		RequestContext.destroy();
		return result;
	}
    
}
