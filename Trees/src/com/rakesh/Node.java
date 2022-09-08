package com.rakesh;

 public class Node {
	int key;
	Node left, right;
	
	public Node() {
		this.left = this.right = null;
	}
	
	public Node(int val) {
		this.key = val;
		this.left = this.right = null;
	}
}
