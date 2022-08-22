package com.rakesh.project;

import java.util.*;
public class MainSchoolProject {
	static Scanner sc = new Scanner(System.in);
public static void main(String[] args) {
	doAll();
}

 public static void printMenu() {
	 System.out.println("******************** MENU ********************");
	 System.out.println("1.Show Files\n2.Add [Teacher, Class, Subject]\n3.Delete[Teacher, Class, Subject]\n4.Search[Teacher, Class, Subject]\n5.Close Application ");
	 System.out.println("Enter your choice from 1->5");
 }

	public static void doAll() {
		int choice;
		try {
			loop:do {
				printMenu();
				choice = sc.nextInt();
				switch(choice) {
				case 1:
					DisplayFiles allFiles = new DisplayFiles();
					allFiles.getAllFiles();
					break;
					
				case 2:
				   AddAllFiles addAllFiles = new AddAllFiles();
				   addAllFiles.doExecuteMenuDriven();
					break;
				
				case 3:
					DeleteFiles deleteFiles = new DeleteFiles();
					deleteFiles.doExecuteMenuDriven();
					break;
					
				case 4:
					SearchFiles searchFile = new SearchFiles();
					searchFile.doExecuteMenuDriven();
					
					break;
				
				case 5:
					break loop;
					
					default:
						System.out.println("Enter a number from 1->5");
					
				}
				
			}while(choice != 0);
		}
		catch(InputMismatchException e) {
			 sc.nextLine();
		     System.out.println("Please Enter a valid number:->");
		}
	}
}
