package com.example.au.couchbasedemo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.au.couchbasedemo.model.Blogs;
import com.example.au.couchbasedemo.model.Employee;
import com.example.au.couchbasedemo.repository.EmployeeRepository;


@RestController
public class EmployeeController {
	
	@Autowired
    EmployeeRepository employeeRepository;
    
	/*
	 * @RequestMapping("/") public String index() { return
	 * "Welcome to the CRUD application!!"; }
	 */
    
    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }
    
    @GetMapping("/employees/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable String id) {
        if (employeeRepository.existsById(id)) {
            return employeeRepository.findById(id);
        } else
            return Optional.empty();
    }
    
    @GetMapping("/employees/address/{address}")
    public List<Employee> getEmployeeByAddress(@PathVariable String address) {
        return employeeRepository.findByAddress(address);
    }
    
    @GetMapping("/employees/pincode/{pincode}")
    public List<Employee> getEmployeeByPincode(@PathVariable String pincode) {
        return employeeRepository.findByPincode(pincode);
    }


	
}
