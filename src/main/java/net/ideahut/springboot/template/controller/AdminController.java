package net.ideahut.springboot.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.ideahut.springboot.admin.AdminHandler;
import net.ideahut.springboot.crud.CrudAction;
import net.ideahut.springboot.crud.CrudResult;
import net.ideahut.springboot.mapper.DataMapper;
import net.ideahut.springboot.object.Result;
import net.ideahut.springboot.util.RequestUtil;

@ComponentScan
@RestController
@RequestMapping("/admin")
class AdminController extends net.ideahut.springboot.admin.AdminController {
	
	@Autowired
	private DataMapper dataMapper;
	@Autowired
	private AdminHandler adminHandler;
	
	@Override
	protected AdminHandler adminHandler() {
		return adminHandler;
	}

	@Override
	protected DataMapper dataMapper() {
		return dataMapper;
	}

	/*
	 * Ada bug dari axios di client yang mengirim request 2 kali
	 * Request pertama body kosong, sedangkan yang request kedua sudah sesuai
	 * Jadi solusi sementara jika data kosong tidak akan diproses dan responnya success (tanpa data)
	 */
	@Override
	@PostMapping(value = "/crud/{action}")
	public Result crud(
		@PathVariable("action") String action
	) throws Exception {
		byte[] data = RequestUtil.getBodyAsBytes();
		if (!(data != null && data.length != 0)) {
			return Result.success();
		}
		CrudResult cres = adminHandler().crud(CrudAction.valueOf(action.toUpperCase()), data);
		Result result;
		if (cres.getError() != null) {
			result = Result.error(cres.getError());
		} else {
			result = Result.success(cres.getValue());
		}
		if (cres.getInfo() != null) {
			result.setInfo(cres.getInfo());
		}
		return result;
	}
	
	

}
