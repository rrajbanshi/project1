package com.rakesh.project;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;
public class AddAllFiles {
  Scanner sc = new Scanner(System.in);
 	public void doExecuteMenuDriven() {
 		int choice;
 		loop:do {
 			printAddMenu();
 			choice = sc.nextInt();
 			switch(choice) {
 			case 1:
 				addTeacher();
 				break;
 				
 			case 2:
 				addClass();
 				break;
 				
 			case 3:
 				addSubject();
 				break;
 				
 			case 4:
 				break loop;
 			}
 			
 		}while(choice != 0);
 	}
 	
 	public void printAddMenu() {
 		System.out.println("1.Add Teacher\n2.Add Class\n3.Add Subject\n4.Back to main menu");
 		System.out.println("Select Option");
 	}
 	public void addTeacher() {
 		
 		try
 		  {
 			sc.nextLine();
 			System.out.println("Enter the name of Teacher:");
 	 		String name = sc.nextLine();
 	 		System.out.println("name->" + name);
 	 		name += "\n";
 		      String filename= "c:\\\\Users\\\\Miles\\\\Desktop\\\\project\\\\teacher.txt";
 		      FileWriter fw = new FileWriter(filename,true); //the true will append the new data
 		      fw.write(name);
 		      fw.close();
 		      System.out.println("Teacher added successfully");
 		  }
 		  catch(IOException ioe)
 		  {
 		      System.err.println("IOException: " + ioe.getMessage());
 		  }
 	}
 	
public void addClass() {
 		
 		try
 		  {
 			sc.nextLine();
 			System.out.println("Enter the class Name:");
 	 		String name = sc.nextLine();
 	 		name += "\n";
 		      String filename= "c:\\\\Users\\\\Miles\\\\Desktop\\\\project\\\\class.txt";
 		      FileWriter fw = new FileWriter(filename,true); //the true will append the new data
 		      fw.write(name);
 		      fw.close();
 		      System.out.println("class added successfully");
 		  }
 		  catch(IOException ioe)
 		  {
 		      System.err.println("IOException: " + ioe.getMessage());
 		  }
 	}

public void addSubject() {
		
		try
		  {
			sc.nextLine();
			System.out.println("Enter the name of Subject:");
	 		String name = sc.nextLine();
	 		name += "\n";
		      String filename= "c:\\\\Users\\\\Miles\\\\Desktop\\\\project\\\\subject.txt";
		      FileWriter fw = new FileWriter(filename,true); //the true will append the new data
		      fw.write(name);
		      fw.close();
		      System.out.println("subject added successfully");
		  }
		  catch(IOException ioe)
		  {
		      System.err.println("IOException: " + ioe.getMessage());
		  }
	}


}
