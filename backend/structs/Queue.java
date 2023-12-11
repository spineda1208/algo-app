package structs;

public class Queue<T> {
	private Node<T> head;
	private Node<T> tail;
	private int length;

	public Queue() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	public void enqueue(T data) {
		Node<T> node = new Node<>(data);
		if (length == 0 ) {
			this.tail = node;
			this.head = node;
		}
		else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	public T dequeue() {
		if (length == 0) { return null; }
		T data = this.head.data;
		this.head = this.head.next;
		this.length--;
		return data;
	}

	public int length() { return this.length; }
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
