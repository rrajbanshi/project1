/*Implement a method to check for the existence of a value in a binary tree using recursion. Compare this method with the find() method. The find() method does the same job using iteration. */
package com.rakesh;
import java.util.*;

public class findingAndElement {
	static boolean flag = false;
    public static void findElement(Node node, int data) {
    	if(node == null) {
    		return;
    	}
    	if(node.key == data) {
    		flag = true;
    		return;
    	}
    	findElement(node.left, data);
    	findElement(node.right, data);
    }
	public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
		Node root = new Node(5);
		root.left = new Node(3);
		root.right = new Node(10);
		root.left.left = new Node(2);
		root.left.right = new Node(4);
		root.right.right = new Node(13);
		System.out.println("Enter the item you want to search in: ");
		int n = sc.nextInt();
		findElement(root, n);
		if(flag == true) {
			 System.out.println("Item " + n + " found");
		}else {
			System.out.println("Item was not found:");
		}
		sc.close();

	}

}
