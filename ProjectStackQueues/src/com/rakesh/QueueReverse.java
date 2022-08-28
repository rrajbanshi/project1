/*
Given an integer K and a queue of integers, write code to reverse the order of the first K elements of the queue.
Input : Q = [10, 20, 30, 40, 50], k = 3
Output : Q = [30, 20, 10, 40, 50] 
*/

package com.rakesh;

import java.util.Queue;
import java.util.Stack;
import java.util.*;

public class QueueReverse {

	static Queue<Integer> queue;
	
	static void reverseFirstKElements(int k)
	{
		if (queue.isEmpty() == true
			|| k > queue.size())
			return;
		if (k <= 0)
			return;

		Stack<Integer> stack = new Stack<Integer>();
		for (int i = 0; i < k; i++) {
			stack.push(queue.peek());
			queue.remove();
		}

		while (!stack.empty()) {
			queue.add(stack.peek());
			stack.pop();
		}

		for (int i = 0; i < queue.size() - k; i++) {
			queue.add(queue.peek());
			queue.remove();
		}
	}

	static void PrintElement()
	{
		while (!queue.isEmpty()) {
			System.out.print(queue.peek() + " ");
			queue.remove();
		}
	}

	public static void main(String args[])
	{  
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the size of Queue");
		int n = Integer.parseInt(sc.nextLine());
		queue = new LinkedList<Integer>();
		System.out.println("Enter the array element:");
		for(int i = 0; i < n; i++) {
			queue.add(Integer.parseInt(sc.nextLine()));
		}
		System.out.println("Enter the value of K");
        int k = Integer.parseInt(sc.nextLine());
        reverseFirstKElements(k);
		PrintElement();
		sc.close();
	}
}
