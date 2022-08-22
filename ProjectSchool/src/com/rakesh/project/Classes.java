package com.rakesh.project;

public class Classes {
 private int classId;
 private String className;
public Classes() {
	super();
}
 public Classes(String name) {
	 this.className = name;
 }
 
 public Classes(String name, int id) {
	 this.classId = id;
	 this.className = name;
 }
public int getClassId() {
	return classId;
}
public void setClassId(int classId) {
	this.classId = classId;
}
public String getClassName() {
	return className;
}
public void setClassName(String className) {
	this.className = className;
}
 
  
}
