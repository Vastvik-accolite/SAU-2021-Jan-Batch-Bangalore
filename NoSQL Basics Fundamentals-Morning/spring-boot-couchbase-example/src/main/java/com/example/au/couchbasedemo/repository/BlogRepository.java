package com.example.au.couchbasedemo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.au.couchbasedemo.model.Blogs;

public interface BlogRepository extends CrudRepository<Blogs, String> {
	
	Blogs findByAuthor(String author);
	
	List deleteBytopicAndAuthor(String title, String author);
	
	ArrayList<Blogs> findByTag1(String tag);
	ArrayList<Blogs> findByTag2(String tag);
	   
}