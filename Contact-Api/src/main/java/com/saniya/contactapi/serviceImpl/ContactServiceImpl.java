package com.saniya.contactapi.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saniya.contactapi.entity.Contact;
import com.saniya.contactapi.repository.ContactRepository;
import com.saniya.contactapi.service.ContactService;

@Service
public class ContactServiceImpl extends ContactService{

	@Autowired
	ContactRepository cr;
	
	@Override
	public void saveForm(Contact c) {
		cr.save(c);
	}

	@Override
	public List<Contact> getall() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

}
