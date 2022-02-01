package com.yash.hospital.Controller;
 

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.yash.hospital.Repository.AppointmentRepository;
import com.yash.hospital.Repository.ContactRepository;
import com.yash.hospital.Repository.LoginRepository;
import com.yash.hospital.Repository.SignupRepository;
import com.yash.hospital.models.Appointment;
import com.yash.hospital.models.Contact;
import com.yash.hospital.models.Login;
import com.yash.hospital.models.Signup;
import com.yash.hospital.services.AppointmentService;
import com.yash.hospital.services.ContactService;
import com.yash.hospital.services.SignupService;

 

 

@RestController
@CrossOrigin()
//@CrossOrigin(allowedHeaders="*" ,origins="*")

public class loginController {

	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private SignupRepository signupRepository;
	@Autowired
	private SignupService signupService ;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	@Autowired
	private AppointmentService appointmentService;
	
	@Autowired
	private ContactService contactService;
	
	 @Autowired
	 private ContactRepository contactRepository;

/*************************************************************************/
	

	@ResponseBody
	@GetMapping(path = "/")
	public String default1() {
		return "oops....!! invalid url";
	}
	
/*************************************************************************/
	
	@ResponseBody
	@GetMapping(path = "/logindata")
	public Iterable<Login> logindata() {

		return loginRepository.findAll();
	}
/* *********************show signup data************************************************ */
	@ResponseBody
		@GetMapping(path = "/signupdata")
	public Iterable<Signup> signupdata() {
		return signupRepository.findAll();
	}
	
/* **********************store appointment booking data************************************************* */
	
	@PostMapping("/bookappointment")
	public Appointment bookAppointment(@RequestBody Appointment appointment) {
		 
	 return	appointmentService.bookAppointment(appointment);
	}
	
	
/* *********************show appointment data (getmapping)******************************************* */
    	@ResponseBody
		@GetMapping(path="/appointmentdata")
	public List<Appointment> getall() {
		 
		return (List<Appointment>) appointmentRepository.findAll();
	}
    	
    	
/* *********************store contact data (postmapping)******************************************** */
    	
    	@PostMapping("/contactdata")
    	public Contact contactData(@RequestBody Contact contact) {
    		 
    	 return	contactService.contactData(contact);
    	}
    	
    	
    	//get contact list
    	@GetMapping(path = "/getcontactdata")
    	public Iterable<Contact> getContactdata() {

    		return contactRepository.findAll();
    	}
    	
/* **********************store signupdata(postmapping)************************************************ */ 	
    	
    	@PostMapping("/signupdata")
    	public Signup signupData(@RequestBody Signup signup) {
    		 
    	 return	signupService.signupData(signup);
    	}
    	
/* ************************************************************************************* */

    	@PutMapping("/updateAppointment")
    	public Appointment updateAppointment(@RequestBody Appointment appointment) {
    		return appointmentService.updateAppointment(appointment);
    	}
    	
/* ************************************************************************ */
    	@DeleteMapping("/deleteAppointment")
    	public void deleteStudent(@RequestParam Integer id) {
    		appointmentService.deleteAppointment(id);
    	}
     	
    	
    	
    	
    	
}
