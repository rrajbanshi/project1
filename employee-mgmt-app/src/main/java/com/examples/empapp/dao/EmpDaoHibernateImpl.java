package com.examples.empapp.dao;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import org.hibernate.HibernateException;

//import javax.transaction.Transaction;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.examples.empapp.Utils.HibernateConnection;
import com.examples.empapp.exception.EmployeeException;
import com.examples.empapp.model.Employee;

public class EmpDaoHibernateImpl implements EmpDaoHibernate{

	SessionFactory sessionFactory = HibernateConnection.getSessionFactory();
	@Override
	public boolean create(Employee emp) {
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
	public boolean update(Employee emp) {
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
		
		return false;
	}

	@Override
	public Employee get(int empId) throws EmployeeException {
		 Session session = null;
		 Transaction tx = null;
		 Employee employee = null;
		 try {
			 session = sessionFactory.openSession();
			 tx = session.beginTransaction();
			 employee = session.get(Employee.class, empId);
			 tx.commit();
			 return employee;
			 
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
	public List<Employee> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void bulkImport() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void bulkExport() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean validate(Employee emp, String msg, Predicate<Employee> condition,
			Function<String, Boolean> operation) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public long getEmployeeCountAgeGreaterThan(int age) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Integer> getEmployeeIdsAgeGreaterThan(int age) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Long> getEmployeeCountByDepartment() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Long> getEmployeeCountByDepartmentOdered() {
		// TODO Auto-generated method stub
		return null;
	}

}
