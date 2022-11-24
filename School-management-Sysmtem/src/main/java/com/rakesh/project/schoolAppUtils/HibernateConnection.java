package com.rakesh.project.schoolAppUtils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.rakesh.project.model.Teacher;


public class HibernateConnection {

	/*
	 * private static final SessionFactory factory = new
	 * Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
	 */	
	
	private static final SessionFactory SESSION_FACTORY = builSessionFactory();
	
	private static SessionFactory builSessionFactory() {
		SessionFactory sessionFactory = null;
		try {
			sessionFactory = new Configuration().addAnnotatedClass(Teacher.class).configure("hibernate.cfg.xml").buildSessionFactory();
		} catch (Throwable e) {
			System.out.println("Intial SessionFactory creation failed"+e.getMessage());
			throw new ExceptionInInitializerError(e);
		}
		return sessionFactory;
	}
	
	public static SessionFactory getSessionFactory() {
		return SESSION_FACTORY;
	}
	
	public static void closeSession() {
		getSessionFactory().close();
	}
	
}

