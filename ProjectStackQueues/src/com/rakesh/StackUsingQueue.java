/*
 3.	Build a stack using two queues. Implement the following operations and calculate their runtime complexities.

-	push
-	pop
-	peek
-	size
-	isEmpty

 */
package com.rakesh;

import java.util.*;
class StackS{
	Queue<Integer> queue1 = new LinkedList<>();
	Queue<Integer> queue2 = new LinkedList<>();
	static int size = 0;
	public StackS() {}
	public void push(int val) {
		queue2.add(val);
		while(!queue1.isEmpty()) {
			queue2.add(queue1.peek());
			queue1.remove();
		}
		Queue<Integer> q = queue1;
		queue1 = queue2;
		queue2 = q;
	}
	public int pop() {
		if(queue1.isEmpty()) {
			return -1;
		}
		return queue1.remove();
	}
	public int peek() {
		if(queue1.isEmpty()) {
			return -1;
		}
		return queue1.peek();
	}
	
	public int size() {
		return queue1.size();
	}
	
	public boolean isEmpty() {
		if(queue1.size() == 0) {
			return true;
		}
		return false;
	}
}
public class StackUsingQueue {
	
public static Scanner sc = new Scanner(System.in);
	
 public static void main(String[] args) {
	 StackS s = new StackS();
	 ExecuteDoAll(s);
 }
 public static void ExecuteDoAll(StackS s) {
		String selection;
		do {
			selection = "Y";
			printMenu();
			int choice = sc.nextInt();
			switch(choice) {
			case 1:
				pushStack(s);
				break;
				
			case 2:
				popStack(s);
				break;
				
			case 3:
				peekStack(s);
				break;
			case 4:
				sizeStack(s);
				break;
			case 5:
				isEmptyStack(s);
				break;
			default:
				System.out.println("please select from the given option:");
				break;
			}
			
			System.out.println("Do you want to continue:[Y/N]:");
			selection = sc.next();
			
		}while(selection.equalsIgnoreCase("Y"));
		if(selection.equalsIgnoreCase("N")) {
			System.out.println("You have pressed No, program Exiting.....");
		}
	}
	
  public static void printMenu() {
 	 System.out.println("1. Push");
 	 System.out.println("2. Pop");
 	 System.out.println("3. Peek");
 	 System.out.println("4. Size");
 	 System.out.println("5. isEmpty");
 	 System.out.println("Enter option: ");
  }
  
  public static void pushStack(StackS s) {
 	 System.out.println("Enter a number: ");
 	 int num = sc.nextInt();
 	 s.push(num);
 	 System.out.println("Item " + num + " is successfully pushed");
  }
  
  public static int popStack(StackS s) {
 	 if(s.isEmpty()) {
 		 System.out.println("stack is empty , Underflow, you can not pop");
 		 return -1;
 	 }
 	 int num = s.pop();
 	 System.out.println("item removed is " + num);
 	 return num;
 	 
  }
  
  public static void peekStack(StackS s) {
 	 if(s.isEmpty()) {
 		 System.out.println("stack is Empty");
 		 return;
 	 }
 	 System.out.println("Peek element in a stack is " + s.peek());
  }
  
  public static void sizeStack(StackS s) {
 	 System.out.println("size of Stack is " + s.size());
  }
  
  public static void isEmptyStack(StackS s) {
 	 if(s.isEmpty()) {
 		 System.out.println("Stack is empty");
 	 }else {
 		 System.out.println("Stack is not empty");
 	 }
  }
}
