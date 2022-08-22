package com.rakesh.project;

public class Subjects {

	private int subjectId;
	private String subjectName;
	
	public Subjects() {}
	public Subjects(String name) {
		this.subjectName = name;
	}
	
	public Subjects(String name, int id) {
		this.subjectId = id;
		this.subjectName = name;
	}
	public int getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	
}
