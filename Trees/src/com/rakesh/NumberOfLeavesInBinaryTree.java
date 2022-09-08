/*Implement a method to count the number of leaves in a binary tree. */
package com.rakesh;

public class NumberOfLeavesInBinaryTree {
	public static int findTotalLeaveNodes(Node root) {
		if(root == null) {
			return 0;
		}
		if(root.left == null && root.right == null) {
			return 1;
		}
		return findTotalLeaveNodes(root.left) + findTotalLeaveNodes(root.right);
	}

	public static void main(String[] args) {
		Node root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.right.left = new Node(5);
		root.right.right = new Node(6);
		
		
		int res = findTotalLeaveNodes(root);
		System.out.println("Number of leaves nodes -> " + res);
		

	}

}
