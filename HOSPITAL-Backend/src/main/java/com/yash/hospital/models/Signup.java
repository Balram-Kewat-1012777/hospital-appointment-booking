package com.yash.hospital.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Signup {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int empnumber;
	private String firstname;
	private String lastname;
	private String email;
	private String username;
	private String designation;
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEmpnumber() {
		return empnumber;
	}
	public void setEmpnumber(int empnumber) {
		this.empnumber = empnumber;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Signup() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Signup(int id, int empnumber, String firstname, String lastname, String email, String username,
			String designation, String password) {
		super();
		this.id = id;
		this.empnumber = empnumber;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.username = username;
		this.designation = designation;
		this.password = password;
	}
	@Override
	public String toString() {
		return "Signup [id=" + id + ", empnumber=" + empnumber + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", username=" + username + ", designation=" + designation + ", password="
				+ password + "]";
	}
	
	
}