package com.saniya.contactapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saniya.contactapi.entity.Contact;
import com.saniya.contactapi.service.ContactService;


@RestController
@CrossOrigin("http://localhost:5176/")
public class ContactController {

    @Autowired
    ContactService cs;

    @PostMapping("/saveform")
    public void saveForm(@RequestBody Contact c) {
        cs.saveForm(c);
    }
    
    @GetMapping("/getall")
    public List<Contact> getall(){
    	return cs.getall();
    }
}
