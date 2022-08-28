/*
 2.	Design a stack that supports push, pop and retrieving the minimum value in constant time.
For example, we populate our stack with [5, 2, 10, 1] (from left to right).

stack.min() //1
stack.pop() 
stack.min() //2 
 */
package com.rakesh;
import java.util.*;

class MinStack{
	Stack<Integer> st;
	
	public MinStack() {
		st = new Stack<>();
	}
	
	public void push(int val) {
		st.push(val);
	}
	public int pop() {
		if(st.isEmpty()) {
			System.out.println("Stack is Empty:, Underflow condition");
			return -1;
		}
		return st.pop();
	}
	public int min() {
		if(st.isEmpty()) {
			return -1;
		}
		 int min = st.stream().min(Integer::compare).get();
		return min;
	}
}
public class DesigningMinStack {
 
	public static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) {
		
     MinStack s = new MinStack();
     ExecuteDoAll(s);
	}
	public static void ExecuteDoAll(MinStack s) {
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
				minStack(s);
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
 	 System.out.println("3. MinStack");
 	 System.out.println("Enter option: ");
  }
  
  public static void pushStack(MinStack s) {
	  System.out.println("Enter the value : ");
	  int val = sc.nextInt();
	  s.push(val);
	  System.out.println("Item " + val +" is inserted into stack");
  }
  
  public static void popStack(MinStack s) {
	  int val = s.pop();
	  if(val != -1) {
		  System.out.println("item popped is " + val);
	  }
  }
  
  public static void minStack(MinStack s) {
	  int val = s.min();
	  if(val != -1) {
		  System.out.println("minimum stack is " + val);
	  }else {
		  System.out.println("Stack is empty: no min in the stack");
	  }
  }
  

}
