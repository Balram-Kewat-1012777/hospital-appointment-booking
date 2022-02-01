package com.yash.hospital.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.yash.hospital.Repository.AppointmentRepository;
import com.yash.hospital.models.Appointment;
 
@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepository;

	public Appointment  bookAppointment(Appointment appointment) {
		  return appointmentRepository.save(appointment);
		
	}
	
	public Appointment updateAppointment(Appointment appointment) {
			Integer id = appointment.getId();
			Appointment apt = appointmentRepository.findById(id).get();
			apt.setName(appointment.getName());
			apt.setGender(appointment.getGender());
			apt.setAge(appointment.getAge());
			apt.setEmail(appointment.getEmail());
			apt.setPhone(appointment.getPhone());
			apt.setDoctor(appointment.getDoctor());
			apt.setDate(appointment.getDate());
			apt.setTime(appointment.getTime());
			apt.setProblem(appointment.getProblem());
			apt.setHospital(appointment.getHospital());
			apt.setAddress(appointment.getAddress());
			apt.setCity(appointment.getCity());
			return appointmentRepository.save(apt);
		}
// for deleteing appointment
	public void deleteAppointment(Integer id) {
		appointmentRepository.deleteById(id);
	}
}
