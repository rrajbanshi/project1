package com.rakesh.project.service;

import java.util.List;

import com.rakesh.project.model.Teacher;

public interface TeacherService {
	public boolean create(Teacher teacher);

	public boolean update(Teacher teacher);

	public boolean delete(int tId) ;

	public Teacher get(int tId);

	public List<Teacher> getAll();

	public void bulkImport();

	public void bulkExport();

}
