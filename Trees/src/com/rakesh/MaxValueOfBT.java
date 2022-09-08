/*Implement a method to return the maximum value in a binary search tree using recursion.*/
package com.rakesh;

public class MaxValueOfBT {
    
	static int max = Integer.MIN_VALUE;
	public static void findMax(Node node) {
		if(node == null) {
			return;
		}
		if(node.key > max) {
			max = node.key;
		}
		findMax(node.left);
		findMax(node.right);
	}
	
	public static void main(String[] args) {
		Node root = new Node(5);
		root.left = new Node(3);
		root.right = new Node(10);
		root.left.left = new Node(2);
		root.left.right = new Node(4);
		root.right.right = new Node(13);
		
		findMax(root);
		System.out.println("Max Value is -> " + max);

	}

}
