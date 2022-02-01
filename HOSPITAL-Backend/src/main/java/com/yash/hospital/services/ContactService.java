package com.yash.hospital.services;

import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;
import com.yash.hospital.Repository.ContactRepository;
 import com.yash.hospital.models.Contact;

 @Service
 public class ContactService {
 	
 	@Autowired
 	private ContactRepository contactRepository;

 	public Contact  contactData(Contact contact) {
 		  return contactRepository.save(contact);
 		
 	}

 }