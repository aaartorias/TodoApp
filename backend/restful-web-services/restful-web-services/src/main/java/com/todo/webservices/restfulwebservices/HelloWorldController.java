package com.todo.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
	//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// Controller
// handle rest request
@RestController
public class HelloWorldController {

	//GET
	//URI - /hello-world
	//method - "Hello World"
	//@RequestMapping(method = RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
		
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World From beans");
	}
	
	@GetMapping(path="/hello-world-bean/{name}")
	public HelloWorldBean helloworlWithPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello Friend, %s",name));
	}
}
