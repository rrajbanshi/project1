package com.rakesh.project.dao;


import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.function.Function;
import java.util.function.Predicate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.rakesh.project.model.Teacher;
import com.rakesh.project.schoolAppUtils.HibernateConnection;

public class TeacherDaoImpl implements TeacherDao{
//	SessionFactory sessionFactory = (SessionFactory) HibernateConnection.getSessionFactory();
	SessionFactory sessionFactory = HibernateConnection.getSessionFactory();
	@Override
	public boolean create(Teacher emp) {
		Transaction tx = null;
		Session session = null;
		try {
			session = sessionFactory.openSession();
			tx = session.beginTransaction();
			session.saveOrUpdate(emp);
			tx.commit();
			return true;
		}
		catch(HibernateException e) {
			tx.rollback();
			e.printStackTrace();
		}
		finally {
			session.close();
		}
		return false;
	}

	@Override
	public boolean update(Teacher emp) {
		Session session = null;
		 Transaction tx = null;
		 try {
			 session = sessionFactory.openSession();
			 tx = session.beginTransaction();
			 session.saveOrUpdate(emp);
			 tx.commit();
			 return true;
		 }
		 catch(HibernateException e) {
			 tx.rollback();
			 e.printStackTrace();
		 }
	     finally {
	    	 session.close();
	     }
		
		return false;
	}

	@Override
	public boolean delete(int empId) {
		Session session = null;
		Transaction tx = null;
		try {
			session = sessionFactory.openSession();
			
			Teacher teacher = session.get(Teacher.class, empId);
			if(teacher != null) {
				tx = session.beginTransaction();
				session.delete(teacher);
				tx.commit();
				return true;
			} else {
				
			}
		}
		catch(HibernateException e) {
			e.printStackTrace();
		}
		finally {
	    	 session.close();
	     }
		return false;
	}

	@Override
	public Teacher get(int empId) {
		Session session = null;
		 Transaction tx = null;
		 Teacher teacher = null;
		 try {
			 session = sessionFactory.openSession();
			 tx = session.beginTransaction();
			 teacher = session.get(Teacher.class, empId);
			 tx.commit();
			 return teacher;
			 
		 }
		 catch(HibernateException e) {
			 tx.rollback();
			 e.printStackTrace();
		 }
	     finally {
	    	 session.close();
	     }
		return null;
	}

	@Override
	public List<Teacher> getAll() {
		Transaction tx = null ;
		Session session = null ;

			try {
				session = sessionFactory.openSession();
				tx = session.beginTransaction();
				ArrayList<Teacher> employees = (ArrayList<Teacher>) session.createQuery("From Teacher").list();
				System.out.println("hello");
				tx.commit();
				if(employees.isEmpty()) {
					System.out.println("no data");
				}
				return employees ;
			} catch (HibernateException he) {
				tx.rollback();
				he.printStackTrace();
			}finally {
				session.close();
			}
			return null ;
	}

	@Override
	public void bulkImport() {
		System.out.format("%n%s - Import started %n", Thread.currentThread().getName());
		int counter = 0;
		try (Scanner in = new Scanner(new FileReader(".\\input\\teacher-input.txt"))) {
			System.out.println("Implorting file...");
			while (in.hasNextLine()) {
				String emp = in.nextLine();
				System.out.println("Importing employee - " + emp);
				Teacher employee = new Teacher();
				StringTokenizer tokenizer = new StringTokenizer(emp, ",");

				// Emp ID
				employee.setTid(Integer.parseInt(tokenizer.nextToken()));
				// Name
				employee.setName(tokenizer.nextToken());
				// Age
				employee.setAge(Integer.parseInt(tokenizer.nextToken()));
				// Designation
				employee.setDesignation(tokenizer.nextToken());
				// Department
				employee.setDepartment(tokenizer.nextToken());
				// subject
				employee.setSubject(emp);
				this.create(employee);
				counter++;
			}
			System.out.format("%s - %d teacher are imported successfully.", Thread.currentThread().getName(),
					counter);
		} catch (Exception e) {
			System.out.println("Error occured while importing employee data. " + e.getMessage());
		}
		
	}

	@Override
	public void bulkExport() {
		System.out.format("%n%s - Export started %n", Thread.currentThread().getName());
		try (FileWriter out = new FileWriter(".\\output\\employee-output.txt")) {
			Map<Integer, Teacher> teacher = new HashMap<>();
			teacher.values().stream().map(emp -> emp.getTid() + "," + emp.getName() + "," + emp.getAge() + ","
							+ emp.getDesignation() + "," + emp.getDepartment() + "," + emp.getSubject() + "\n")
					.forEach(rec -> {
						try {
							out.write(rec);
						} catch (IOException e) {
							System.out
									.println("Error occured while writing teacher data into file. " + e.getMessage());
							e.printStackTrace();
						}
					});
			System.out.format("%d Employees are exported successfully.", teacher.values().size());
		} catch (IOException e) {
			System.out.println("Error occured while exporting employee data. " + e.getMessage());
		}
		
	}

}
