package com.saniya.contactapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saniya.contactapi.entity.Contact;
import com.saniya.contactapi.service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:5175")
public class ContactController {

	@Autowired
	ContactService cs;
	
	@PostMapping("/saveform")
	public void saveForm(@RequestBody Contact c) {
		cs.saveForm(c);
	}
	
}
