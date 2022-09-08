/*Implement a method to return the ancestors of a value in a List <Integer>.*/

package com.rakesh;

import java.util.ArrayList;
import java.util.Scanner;

public class findAncestor {
    public static ArrayList<Integer> findAncestorItems(Node node, int data){
    	if(node == null){
            return new ArrayList<>();
        }
    if(node.key == data){
        ArrayList<Integer> bres = new ArrayList<>();
        bres.add(data);
        return bres;
    }
    
    //left recursion
    ArrayList<Integer> lres =  findAncestorItems(node.left, data);
    if(lres.size() > 0){
        lres.add(node.key);
        return lres;
    }
    
    
    //right recursion
    
    ArrayList<Integer> rres =  findAncestorItems(node.right, data);
    if(rres.size() > 0){
        rres.add(node.key);
        return rres;
    }
    
    return new ArrayList<>();
    }
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Node root = new Node(5);
		root.left = new Node(3);
		root.right = new Node(10);
		root.left.left = new Node(2);
		root.left.right = new Node(4);
		root.right.right = new Node(13);
		System.out.println("Enter the item :");
		int n = sc.nextInt();
		ArrayList<Integer> res = findAncestorItems(root, n);
		System.out.println(res);
		sc.close();

	}

}
