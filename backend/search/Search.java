package search;

import structs.BinaryTree;
import structs.Queue;
import structs.Stack;

public class Search {
	public boolean linearSearch(int[] array, int value) {
		for (int i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return true;
			}
		}
		return false;
	}

	public boolean binarySearch(int[] array, int value) {
		int low = 0;
		int high = array.length - 1;
		int middle;
		while (low <= high) {
			middle = low + Math.floorDiv(high - low, 2);
			if (array[middle] == value) {
				return true;
			}
			if (array[middle] < value) {
				low = middle + 1;
			}
			if (array[middle] > value) {
				high = middle;
			}
		}
		return false;
	}

	public void breadthFirstSearch(BinaryTree.Node root) {
		if (root == null) {
			return;
		}

		Queue<BinaryTree.Node> queue = new Queue<>();
		queue.enqueue(root);

		while (queue.length() != 0) {
			BinaryTree.Node node = queue.dequeue();
			System.out.print(node.data + " ");

			if (node.left != null) {
				queue.enqueue(node.left);
			}

			if (node.right != null) {
				queue.enqueue(node.right);
			}
		}
	}

	public void depthFirstSearch(BinaryTree.Node root) {
		if (root == null) {
			return;
		}

		Stack<BinaryTree.Node> stack = new Stack<>();
		stack.push(root);

		while (stack.size() != 0) {
			BinaryTree.Node node = stack.pop();
			System.out.print(node.data + " ");

			if (node.right != null) {
				stack.push(node.right);
			}

			if (node.left != null) {
				stack.push(node.left);
			}
		}
	}
}