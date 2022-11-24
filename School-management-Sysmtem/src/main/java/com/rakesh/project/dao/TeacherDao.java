package com.rakesh.project.dao;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import com.rakesh.project.model.Teacher;

public interface TeacherDao {
	public boolean create(Teacher emp);

	public boolean update(Teacher  emp);

	public boolean delete(int empId);

	public Teacher get(int empId);

	public List<Teacher> getAll();

	public void bulkImport();

	public void bulkExport();
}
