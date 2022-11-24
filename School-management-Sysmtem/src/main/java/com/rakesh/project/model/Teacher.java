package com.rakesh.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;


@Entity
@Table(name = "Teacher")
public class Teacher {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private int tid;
private String name;
private int age;
private String department;
private String designation;
private String subject;

public Teacher() {}

public int getTid() {
	return tid;
}

public void setTid(int tid) {
	this.tid = tid;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}

public String getDesignation() {
	return designation;
}

public void setDesignation(String designation) {
	this.designation = designation;
}

public String getSubject() {
	return subject;
}

public void setSubject(String subject) {
	this.subject = subject;
}

public Teacher(int tid, String name, int age, String department, String designation, String subject) {
	super();
	this.tid = tid;
	this.name = name;
	this.age = age;
	this.department = department;
	this.designation = designation;
	this.subject = subject;
}
public String toString() {
	return String.format("Id:%d, Name:%s", this.getTid(), this.getName());
}
}


