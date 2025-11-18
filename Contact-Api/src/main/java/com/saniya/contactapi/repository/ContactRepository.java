package com.saniya.contactapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saniya.contactapi.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
