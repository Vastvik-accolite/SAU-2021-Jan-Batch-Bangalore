package com.example.au.couchbasedemo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.au.couchbasedemo.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, String> {
	
	List<Employee> findByAddress(String address);

	List<Employee> findByPincode(String pincode);
	   
}

