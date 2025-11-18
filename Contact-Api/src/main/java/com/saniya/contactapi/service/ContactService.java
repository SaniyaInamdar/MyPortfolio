package com.saniya.contactapi.service;

import java.util.List;

import com.saniya.contactapi.entity.Contact;

public abstract class ContactService {
	public abstract void saveForm(Contact c);

	public abstract List<Contact> getall();
}
