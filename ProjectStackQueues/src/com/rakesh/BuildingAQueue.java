/*
 Build a queue using a linked list from scratch. Implement the following operations and calculate their runtime complexities.

-	enqueue
-	dequeue
-	peek
-	size
-	isEmpty
 */
package com.rakesh;
import java.util.*;
class Node{
	int key;
	Node next;
	
	public Node(int key){
		this.key = key;
		this.next = null;
	}
}

class QueueQ{
	Node front, rear;
	private static int size = 0;
	
	public QueueQ() {
		this.front = this.rear = null;
	}
	
	public void enqueue(int key) {
		Node temp = new Node(key);
		
		if(this.rear == null) {
			this.front = this.rear = temp;
			size++;
			return;
		}
		this.rear.next = temp;
		this.rear = temp;
		size++;
	}
	
	public void dequeue() {
		if(this.front == null) {
			return;
		}
		Node temp = this.front;
		this.front = this.front.next;
		
		if(this.front == null) {
			this.rear = null;
		}
		size--;
	}
	public boolean isEmpty() {
		if(this.front == null) {
			return true;
		}
		return false;
	}
	public int peek() {
		if(isEmpty()) {
			return -1;
		}
		return front.key;
	}
	public int size() {
		return size;
	}
	
}
public class BuildingAQueue {
	public static Scanner sc = new Scanner(System.in);
	public static void main(String[] args)throws IllegalStateException
	{
		QueueQ q = new QueueQ();
		 ExecuteDoAll(q);
	}
	
	public static void ExecuteDoAll(QueueQ q) {
		String selection;
		do {
			selection = "Y";
			printMenu();
			int choice = sc.nextInt();
			switch(choice) {
			case 1:
				enqueueOp(q);
				break;
				
			case 2:
				dequeueOp(q);
				break;
				
			case 3:
				peekOp(q);
				break;
			case 4:
				sizeOp(q);
				break;
			case 5:
				isEmptyOp(q);
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
    	 System.out.println("1. EnQueue");
    	 System.out.println("2. Dequeue");
    	 System.out.println("3. Peek");
    	 System.out.println("4. Size");
    	 System.out.println("5. isEmpty");
    	 System.out.println("Enter option: ");
     }
     
     public static void enqueueOp(QueueQ q) {
    	 System.out.println("Enter a number to Enqueue: ");
    	 int num = sc.nextInt();
    	 q.enqueue(num);
    	 System.out.println("Item " + num + " is successfully inserted");
     }
     
     public static void dequeueOp(QueueQ q) {
    	 if(q.isEmpty()) {
    		 System.out.println("Queue is empty, you cant run a dequeue operation");
    		 return;
    	 }
    	 q.dequeue();
    	 System.out.println("one item has been removed:");
    	 
     }
     
     public static void peekOp(QueueQ q) {
    	 if(q.isEmpty()) {
    		 System.out.println("Queue is Empty");
    		 return;
    	 }
    	 System.out.println("Peek element in a queue " + q.peek());
     }
     
     public static void sizeOp(QueueQ q) {
    	 System.out.println("size of Queue is " + q.size());
     }
     
     public static void isEmptyOp(QueueQ q) {
    	 if(q.isEmpty()) {
    		 System.out.println("Queue is empty");
    	 }else {
    		 System.out.println("Queue is not empty");
    	 }
     }
}





