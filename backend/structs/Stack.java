package structs;

public class Stack<T> {
	private Node<T>	head;
	private int size;

	public Stack() {
		this.head = null;
		this.size = 0;
	}

	public void push(T data) {
		Node<T> node = new Node<>(data);
		if (this.size == 0) { 
			this.head = node;
		}
		else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	public T pop() {
		if ( size == 0 ) { return null; }
		this.size--;
		T data = this.head.data;
		this.head = this.head.next;
		return data;
	}

	public int size() { return this.size; }
	public T peek() { return this.head.data; }

	public String toString() {
		String string = "";
		Node<T> current = this.head;
		while ( current != null ) {
			string += current.data;
			if ( current.next != null ) {
				string += " -> ";
			}
			current = current.next;
		}
		return string;
	}
}
