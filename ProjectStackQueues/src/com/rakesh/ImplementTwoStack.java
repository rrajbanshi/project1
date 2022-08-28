/*
1.	Implement two Stacks in one array. Support these operations: 
push1() //to push in the first stack
push2() //to push in the second stack
pop1()
pop2()
isEmpty1()
isEmpty2()
isFull1()
isFull2()
Make sure your implementation is space efficient. (hint: do not allocate the same amount of space by dividing the array in half). 
 */

package com.rakesh;
import java.util.*;

class TwoStack{
	int[] arr;
	int s1;
	int s2;
	
	public TwoStack(int cap) {
		arr = new int[cap];
		s1 = -1;     //initially not pointing to anywhere in arr 
		s2 = arr.length; //initially not pointing to anywhere in arr
	}
	public boolean push1(int val) {
		if(s2 == s1 + 1) {
			return false;
		}
		
		s1++;
		arr[s1] = val;
		return true;	
	}
	
	public boolean push2(int val) {
		if(s1 == s2 - 1) {
			return false;
		}
		s2--;
		arr[s2] = val;
		return true;
	}
	
	public int size1() {
		return (s1 + 1);    //from 0th index to Up
	}
	
	public int size2() {
		int length = arr.length;
		return (length - s2);  //from n - 1 index to Down
	}
	
	public boolean isEmpty1() {
		if(size1() == 0) {
			return true;
		}
		return false;
	}
	
	public boolean isEmpty2() {
		if(size2() == 0) {
			return true;
		}
		return false;
	}
	
	public int pop1() {
		if(isEmpty1()) {
			return -1;
		}
		int val = arr[s1];
		s1--;
		return val;
	}
	
	public int pop2() {
		if(isEmpty2()) {
			return -1;
		}
		int val = arr[s2];
		s2++;
		return val;
	}
	
	public boolean isFull1() {
		if(s1 + 1 == s2) {
			return true;
		}
		return false;
	}
	
	public boolean isFull2() {
		if(s2 -1 == s1) {
			return true;
		}
		return false;
	}
}

public class ImplementTwoStack {

	public static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) {
		
		 System.out.println("Enter the length of Array: ");
		 int n = sc.nextInt();
		 TwoStack s = new TwoStack(n);
		 ExecuteDoAll(s);
	}
	public static void ExecuteDoAll(TwoStack s) {
		String selection;
		do {
			selection = "Y";
			printMenu();
			int choice = sc.nextInt();
			switch(choice) {
			case 1:
				push1Func(s);
				break;
				
			case 2:
				push2Func(s);
				break;
				
			case 3:
				pop1Func(s);
				break;
				
			case 4:
				pop2Func(s);
				break;
				
			case 5:
				isEmpty1Func(s);
				break;
				
			case 6:
				isEmpty2Func(s);
				break;
				
			case 7:
				isFull1Func(s);
				break;
				
			case 8:
				isFull2Func(s);
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
 	 System.out.println("1. Push1");
 	 System.out.println("2. Push2");
 	 System.out.println("3. Pop1");
 	 System.out.println("4. Pop2");
 	 System.out.println("5. isEmpty1");
 	 System.out.println("6. isEmpty2");
	 System.out.println("7. isFull1");
	 System.out.println("8. isFull2");
 	 System.out.println("Enter option: ");
  }
  
  public static void push1Func(TwoStack s) {
	 System.out.println("Enter the value: ");
	 int val = sc.nextInt();
 	if(s.push1(val)) {
 		System.out.println("Item pushed is " + val);
 	}else {
 		System.out.println("Over flo condition, can't push");
 	}
  }
  
  public static void push2Func(TwoStack s) {
 	System.out.println("Enter the value : ");
 	int val = sc.nextInt();
 	if(s.push2(val)) {
 		System.out.println("Item pushed is " + val);
 	}
 	else {
 		System.out.println("over flow condition, can't push");
 	}
  }
  
  public static void pop1Func(TwoStack s) {
 	 int val = s.pop1();
 	 if(val == -1) {
 		 System.out.println("Stack is underflow ");
 	 }else {
 		 System.out.println("popped item is " + val);
 	 }
  }
  public static void pop2Func(TwoStack s) {
	 	 int val = s.pop2();
	 	 if(val == -1) {
	 		 System.out.println("Stack is underflow ");
	 	 }else {
	 		 System.out.println("popped item is " + val);
	 	 }
	  }
  
  public static void isEmpty1Func(TwoStack s) {
	  if(s.isEmpty1()) {
		  System.out.println("Stack is empty");
	  }else {
		  System.out.println("Stack is not enmpty");
	  }
  }
  public static void isEmpty2Func(TwoStack s) {
	  if(s.isEmpty2()) {
		  System.out.println("Stack is empty");
	  }else {
		  System.out.println("Stack is not enmpty");
	  }
  }

  public static void isFull1Func(TwoStack s) {
	  if(s.isFull1()) {
		  System.out.println("Stack is full");
	  }
	  else {
		  System.out.println("Stack is not full");
	  }
  }
  public static void isFull2Func(TwoStack s) {
	  if(s.isFull2()) {
		  System.out.println("Stack is full");
	  }
	  else {
		  System.out.println("Stack is not full");
	  }
  }
}
