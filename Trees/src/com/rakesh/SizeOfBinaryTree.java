/*Implement a method to calculate the size of a binary tree. */
package com.rakesh;

class BinaryTree{
	Node root;
	
	public BinaryTree(){
		this.root = null;
	}
	public BinaryTree(int val) {
		this.root = new Node(val);
	}
}
public class SizeOfBinaryTree {
        public static int size(Node node) {
        	if(node == null) {
        		return 0;
        	}
        	int lsize = size(node.left);
        	int rsize = size(node.right);
        	return lsize + rsize + 1;
        	
        }
	public static void main(String[] args) {
		BinaryTree tree = new BinaryTree();
		tree.root = new Node(1);
		tree.root.left = new Node(2);
		tree.root.right = new Node(6);
		tree.root.left.left = new Node(8);
		tree.root.left.right = new Node(12);
		int sz = size(tree.root);
		System.out.println("the size of the tree is " + sz);

	}

}
