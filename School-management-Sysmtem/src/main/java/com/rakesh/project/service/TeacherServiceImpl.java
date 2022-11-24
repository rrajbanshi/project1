package com.rakesh.project.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;

import com.rakesh.project.dao.TeacherDaoImpl;
import com.rakesh.project.model.Teacher;

public class TeacherServiceImpl implements TeacherService{

	@Override
	public boolean create(Teacher teacher) {
		return new TeacherDaoImpl().create(teacher);
	}

	@Override
	public boolean update(Teacher teacher) {
		return new TeacherDaoImpl().update(teacher);
	}

	@Override
	public boolean delete(int tId) {
		return new TeacherDaoImpl().delete(tId);
	}

	@Override
	public Teacher get(int tId) {
		Teacher teacher = null;
		try {
			teacher = new TeacherDaoImpl().get(tId);
			if(teacher == null) {
				System.out.println("no data found");
			}
			
		}
	    catch(HibernateException e) {
		  System.out.println("error while getting data" + e.getMessage());
		  e.printStackTrace();
	   }
		return teacher;
	}

	@Override
	public List<Teacher> getAll() {
       return new TeacherDaoImpl().getAll();
	}

	@Override
	public void bulkImport() {
		new TeacherDaoImpl().bulkImport();
		
	}

	@Override
	public void bulkExport() {
		new TeacherDaoImpl().bulkExport();
		
	}

}
