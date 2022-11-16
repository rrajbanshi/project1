package com.examples.empapp.service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import com.examples.empapp.dao.EmpDaoHibernateImpl;
import com.examples.empapp.exception.EmployeeException;
import com.examples.empapp.model.Employee;

public class EmployeeServiceHibernateImpl implements EmployeeServiceHibernate{

	@Override
	public boolean create(Employee emp) {
		boolean create = new EmpDaoHibernateImpl().create(emp);
		return create;
	}

	@Override
	public boolean update(Employee emp) {
		boolean update = new EmpDaoHibernateImpl().update(emp);
		return update;
	}

	@Override
	public boolean delete(int empId) {
		return new EmpDaoHibernateImpl().delete(empId);
	}

	@Override
	public Employee get(int empId) throws EmployeeException {
		return new EmpDaoHibernateImpl().get(empId);
	}

	@Override
	public List<Employee> getAll() {
		return new EmpDaoHibernateImpl().getAll();
	}

	@Override
	public void bulkImport() {
		 new EmpDaoHibernateImpl().bulkImport();
		
	}

	@Override
	public void bulkExport() {
		
		new EmpDaoHibernateImpl().bulkExport();
	}

	@Override
	public boolean validate(Employee emp, String msg, Predicate<Employee> condition,
			Function<String, Boolean> operation) {
		return new EmpDaoHibernateImpl().validate(emp, msg, condition, operation);
	}

	@Override
	public long getEmployeeCountAgeGreaterThan(int age) {
		return new EmpDaoHibernateImpl().getEmployeeCountAgeGreaterThan(age);
	}

	@Override
	public List<Integer> getEmployeeIdsAgeGreaterThan(int age) {
		return new EmpDaoHibernateImpl().getEmployeeIdsAgeGreaterThan(age);
	}

	@Override
	public Map<String, Long> getEmployeeCountByDepartment() {
		return new EmpDaoHibernateImpl().getEmployeeCountByDepartment();
	}

	@Override
	public Map<String, Long> getEmployeeCountByDepartmentOdered() {
		return new EmpDaoHibernateImpl().getEmployeeCountByDepartmentOdered();
	}

}
