package structs;

import java.util.ArrayList;
import java.util.List;

public class Tree {
	private Node root;

	public Tree(int data) {
		this.root = new Node(data);
	}

	public Node root() {
		return root;
	}

	public class Node {
		public int data;
		public List<Node> children;

		public Node(int data) {
			this.data = data;
			this.children = new ArrayList<>();
		}

		public int getData() {
			return data;
		}

		public List<Node> getChildren() {
			return children;
		}

		public void addChild(Node child) {
			children.add(child);
		}
	}
}