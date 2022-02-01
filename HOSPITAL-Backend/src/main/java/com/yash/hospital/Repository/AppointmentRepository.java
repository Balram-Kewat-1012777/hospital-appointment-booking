package com.yash.hospital.Repository;

 
import org.springframework.data.repository.CrudRepository;

import com.yash.hospital.models.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Integer> {

}
