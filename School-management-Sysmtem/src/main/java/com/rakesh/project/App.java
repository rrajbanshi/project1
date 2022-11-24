package com.rakesh.project;

import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import com.rakesh.project.model.Teacher;
import com.rakesh.project.service.TeacherService;
import com.rakesh.project.service.TeacherServiceImpl;
import java.util.*;

/**
 * Hello world!
 *
 */
public class App {

	private static Scanner in;

	public static TeacherService teacherServive;
	public static void main(String[] args) {

		in = new Scanner(System.in);
		teacherServive = new TeacherServiceImpl();
		ExecutorService executor = Executors.newCachedThreadPool();

		System.out.print("Welcome to Teacher Management App!");

		while (true) {

			System.out.println("\n");
			System.out.println("1. Add Teacher");
			System.out.println("2. View Teacher");
			System.out.println("3. Update Teacher");
			System.out.println("4. Delete Teacher");
			System.out.println("5. View All Teacher");
			System.out.println("6. Import");
			System.out.println("7. Export");
			System.out.println("8. Exit");

			System.out.print("Enter the option: ");
			int option = 0;
			// Get option from user
			try {
				option = Integer.parseInt(in.next());
			} catch (NumberFormatException e) {
				System.out.println("Invalid option. Please enter valid option.");
				continue;
			}
			int tid;
			try {
				switch (option) {
				case 1:
					addEmployee();
					System.out.println("Employee has been added successfully!");
					break;
				case 2:
					System.out.print("Please enter Teacher id: ");
					tid = in.nextInt();
					Teacher teacher = null;
				    teacher = teacherServive.get(tid);
					printHeader();
					printDetail(teacher);
					break;
				case 3:
					System.out.print("Please enter teacher id: ");
					tid = in.nextInt();
					Teacher teacherForUpdate;
				    teacherForUpdate = teacherServive.get(tid);
					captureEmpDetail(teacherForUpdate);
					teacherServive.update(teacherForUpdate);
					System.out.println("Teacher has been updated successfully!");
					break;
				case 4:
					System.out.print("Please enter Teacher id: ");
					tid = in.nextInt();
					teacherServive.delete(tid);
					System.out.println("teacher has been deleted successfully!");
					
					break;
				case 5:
					
						List<Teacher> teachers = teacherServive.getAll();
						printHeader();
						for (Teacher t : teachers) {
							printDetail(t);
						}
					
					
					break;
				case 6:				
					Callable<Boolean> importThread = new Callable<Boolean>() {
						@Override
						public Boolean call() throws Exception {
							System.out.println(Thread.currentThread() + " Waiting for 5s to start import process.");
							Thread.sleep(5000);
						teacherServive.bulkImport();							
							return true;
						}
					};
					
					Future<Boolean> importFuture = executor.submit(importThread);
					System.out.println(Thread.currentThread().getName() + " Import process triggered");				
					
					break;			
			
				case 7:
					Callable<Boolean> exportThread = new Callable<Boolean>() {
						@Override
						public Boolean call() throws Exception {
							System.out.println(Thread.currentThread() + " Waiting for 5s to start export process.");
							Thread.sleep(5000);
							teacherServive.bulkExport();							
							return true;
						}
					};
					
					Future<Boolean> exportFuture = executor.submit(exportThread);
					System.out.println(Thread.currentThread().getName() + " Export process triggered");						
					
					
					break;			
									
				case 8:
					System.out.println("Thank you!!!");
					executor.shutdown();
					in.close();
					System.exit(0);
					break;

				default:
					break;
				}
			} catch (NumberFormatException e) {
				System.out.println("Invalid input. Please enter valid input.");
			}
		}

	}

	private static void printHeader() {
		System.out.format("\n%5s %15s %5s %15s %15s %15s", "tid", "name", "age", "designation", "department",
				"subject");
	}

	private static void printDetail(Teacher teacher) {
		if (teacher == null) {
			return;
		}

		System.out.format("\n%5d %15s %5d %15s %15s %15s", teacher.getTid(), teacher.getName(), teacher.getAge(),
				teacher.getDesignation(), teacher.getDepartment(), teacher.getSubject());
	}

	private static void addEmployee() throws NumberFormatException {
		Teacher teacher = new Teacher();

		captureEmpDetail(teacher);

		//empService.create(employee);
		teacherServive.create(teacher);
	}

	private static void captureEmpDetail(Teacher teacher) throws NumberFormatException {
		System.out.print("Enter Teacher Name: ");
		teacher.setName(in.next());
		
		System.out.print("Enter teacher Age: ");
		teacher.setAge(Integer.parseInt(in.next()));

		System.out.print("Enter teacher Designation: ");
		teacher.setDesignation(in.next());

		System.out.print("Enter teacher Department: ");
		teacher.setDepartment(in.next());

		System.out.print("Enter teacher subject : ");
		teacher.setSubject(in.next());
	}

}
