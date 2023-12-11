package structs;

public class LinkedList<T> {
	private Node<T> head;
	private Node<T> tail;
	private int length;

	public LinkedList() {
		this.head = null; 
		this.length = 0;
	}

	public void push(T data) {
		this.length++;
		if (this.head == null) {
			this.head = new Node<T>(data);
			this.tail = this.head;
			return;
		}
		Node<T> node = new Node<T>(data);
		node.next = this.head;
		this.head = node;
	}
	public void append(T data) {
		this.length++;
		if (this.tail == null) {
			this.head = new Node<T>(data);
			this.tail = this.head;
			return;
		}
		Node<T> node = new Node<T>(data);
		this.tail.next = node;
		this.tail = node;
	}
	public void insert(T data, int index) {
		if ( index >= length - 1 ) { this.append(data); this.length++; }
		if ( index == 0 ) { this.push(data); this.length++; }	
		else {
			if ( index < 0 ) { index = this.length + index; }
			int current_index = 0;
			Node<T> node = new Node<T>(data);
			Node<T> current = this.head;
			while ( current_index <= index - 2 ) {
				current = current.next;
				current_index++;
			}
			node.next = current.next.next;
			current.next = node;
		}	
	}

	public T pop() {
		if ( this.tail == null || this.length == 0) { return null; }
		Node<T> current = this.head;
		while ( current.next.next != null) { current = current.next; };
		T value = current.next.data;
		current.next = null;
		this.tail = current;
		length--;
		return value;
	}
	public T popFirst() {
		if ( this.head == null || this.length == 0 ) { return null; }
		T value = this.head.data;
		this.head = this.head.next;
		length--;
		return value;
	}


	public int length() { return this.length; }
	public T peek() { return this.head.data; }

	public String toString() {
		String string = "[";
		Node<T> current = this.head;
		while (current != null) {
			string += current.data;
			if (current.next != null) {
				 string += ",";
				 string += " ";
			}
			current = current.next;
		}
		string += "]";
		return string;
	}
}		
