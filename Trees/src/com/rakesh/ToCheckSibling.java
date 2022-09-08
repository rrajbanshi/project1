/*Implement a method to check to see if two values are siblings in a binary tree. */
package com.rakesh;

import java.util.Scanner;

public class ToCheckSibling {
        static boolean flag = false;
        public static void findSibling(Node node , int n1, int n2) {
        	if(node == null) {
        		return;
        	}
        	if(node.left == null || node.right == null) {
        		return;
        	}
        	if((node.left.key == n1 && node.right.key == n2) || (node.left.key == n2 && node.right.key == n1)) {
        	  flag = true;
        	  return;
        	}
        	findSibling(node.left, n1, n2);
        	findSibling(node.right, n1, n2);
        	
        }
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		Node root = new Node(5);
		root.left = new Node(3);
		root.right = new Node(10);
		root.left.left = new Node(2);
		root.left.right = new Node(4);
		root.right.right = new Node(13);
		System.out.println("Enter the item1 :");
		int n1 = sc.nextInt();
		System.out.println("Enter the item2 :");
		int n2 = sc.nextInt();
		findSibling(root, n1, n2);
		if(flag == true) {
			 System.out.println("Items are siblings");
		}else {
			System.out.println("Items are not sibling");
		}
		sc.close();

	}

}
