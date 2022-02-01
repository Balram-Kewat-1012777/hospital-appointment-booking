package com.yash.hospital.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.hospital.Repository.SignupRepository;
 
import com.yash.hospital.models.Signup;

@Service
public class SignupService {
	
	@Autowired
	private SignupRepository signupRepository;
	
	public Signup  signupData(Signup signup) {
		  return signupRepository.save(signup);
		
	}

}
