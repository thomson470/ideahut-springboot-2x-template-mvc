package net.ideahut.springboot.template.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.ideahut.springboot.annotation.Public;
import net.ideahut.springboot.crud.CrudAction;
import net.ideahut.springboot.crud.CrudHandler;
import net.ideahut.springboot.crud.CrudPermission;
import net.ideahut.springboot.helper.ObjectHelper;
import net.ideahut.springboot.helper.WebMvcHelper;
import net.ideahut.springboot.object.Page;
import net.ideahut.springboot.object.Result;

@Public
@ComponentScan
@RestController
@RequestMapping("/crud")
class CrudController extends net.ideahut.springboot.crud.WebMvcCrudController {
	
	private final CrudHandler handler;
	private final CrudPermission permission;
	
	@Autowired
	CrudController(
		CrudHandler handler, 
		CrudPermission permission
	) {
		this.handler = handler;
		this.permission = permission;
	}
	
	@Override
	protected CrudHandler handler() {
		return handler;
	}
	
	
	
	/*
	 * INFO
	 * - Tipe Id: STANDARD, EMBEDDED, COMPOSITE
	 * - Logical: AND, OR
	 * - Condition: ANY_LIKE, LIKE, BETWEEN, dll
	 * - Match: EXACT (inner join), CONTAIN (left join)
	 * - CrudAction: SINGLE, PAGE, LIST, CREATE, UPDATE, DELETE, dll
	 */
	@Public
	@GetMapping(value = "/info/constant")
	Result infoConstant() {
		return super.constant();
	}	
	
	
	
	/*
	 * BODY ACTION
	 */
	@PostMapping(value = "/action/{action}")
	Result action(
		@PathVariable("action") String action,
		HttpServletRequest httpRequest
	) throws Exception {
		byte[] data = WebMvcHelper.getBodyAsBytes(httpRequest);
		return super.body(CrudAction.valueOf(action.toUpperCase()), data);
	}
	
	
	
	/*
	 * PARAMETER
	 */
	@RequestMapping(
		value = "/parameter/{action}", 
		method = { 
			RequestMethod.GET, 
			RequestMethod.POST, 
			RequestMethod.PUT, 
			RequestMethod.DELETE 
		}
	)
	Result parameter(
		@PathVariable("action") String action,
		HttpServletRequest httpRequest
	) {
		return super.parameter(CrudAction.valueOf(action.toUpperCase()), httpRequest);		
	}
	
	
	
	/*
	 * OBJECT (CrudAction.SINGLE)
	 */
	@Override
	@GetMapping(value = "/rest/{name}/{id}")
	protected Result object(
		@PathVariable("name") String name, 
		@PathVariable("id") String id,
		@RequestParam(value = "manager", required = false) String manager
	) {
		return super.object(manager, name, id);
	}
	
	
	
	/*
	 * COLLECTION (CrudAction.PAGE)
	 */
	@GetMapping(value = "/rest/{name}/{index}/{size}")
	Result collection(
		@PathVariable("name") String name, 
		@PathVariable("index") Integer index, 
		@PathVariable("size") Integer size,
		@RequestParam(value = "manager", required = false) String manager,
		@RequestParam(value = "count", required = false) String count,
		@RequestParam(value = "filters", required = false) String filters,
		@RequestParam(value = "orders", required = false) String orders,
		@RequestParam(value = "fields", required = false) String fields,
		@RequestParam(value = "loads", required = false) String loads		
	) {
		String scount = ObjectHelper.useOrDefault(count, "").trim().toLowerCase();
		Boolean pcount = "1".equals(scount) || "true".equals(scount);
		Page page = Page.of(index, size, pcount);
		return super.collection(manager, name, page, filters, orders, fields, loads);
	}
	
	
	
	/*
	 * CREATE
	 */
	@PostMapping(value = "/rest/{name}")
	Result create(
		@PathVariable("name") String name,
		@RequestParam(value = "manager", required = false) String manager,
		@RequestParam(value = "value", required = false) String value,
		HttpServletRequest httpRequest
	) throws Exception {
		byte[] data = WebMvcHelper.getBodyAsBytes(httpRequest);
		return super.create(manager, name, value, data);
	}
	
	
	
	/*
	 * UPDATE
	 */
	@PutMapping(value = "/rest/{name}/{id}")
	Result update(
		@PathVariable("name") String name,
		@PathVariable("id") String id,
		@RequestParam(value = "manager", required = false) String manager,
		@RequestParam(value = "value", required = false) String value,
		HttpServletRequest httpRequest
	) throws Exception {
		byte[] data = WebMvcHelper.getBodyAsBytes(httpRequest);
		return super.update(manager, name, id, value, data);
	}
	
	
	
	
	/*
	 * DELETE 
	 */
	@Override
	@DeleteMapping(value = "/rest/{name}/{id}")
	protected Result delete(
		@PathVariable("name") String name,
		@PathVariable("id") String id,
		@RequestParam(value = "manager", required = false) String manager
	) {
		return super.delete(manager, name, id);
	}

	
	
	/*
	 * Crud Permission bisa di level Handler ataupun di lever Controller.
	 * Untuk di level Handler akan berlaku disetiap penggunaan CrudHandler
	 * Untuk di level Controller hanya akan berlaku di setiap pemanggilan endpoint Crud
	 */
	@Override
	protected CrudPermission permission() {
		return permission;
	}
	
}
