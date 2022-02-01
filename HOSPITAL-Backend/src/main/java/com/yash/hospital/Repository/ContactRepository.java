package com.yash.hospital.Repository;

import org.springframework.data.repository.CrudRepository;

import com.yash.hospital.models.Contact;

public interface ContactRepository  extends CrudRepository<Contact, Integer>{
 
}
