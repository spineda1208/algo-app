package structs;

public class test {
	public static void main(String[] args) {
		// testLinkedList();
		// testStack();
		// testQueue();
	}
	
	public static void testLinkedList() {
		LinkedList<Integer> linkedList = new LinkedList<Integer>();
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.append(4);
		linkedList.push(0);
		System.out.println(linkedList.toString());
		System.out.println(linkedList.peek());
		System.out.println(linkedList.length());
		System.out.println(linkedList.pop());
		System.out.println(linkedList.toString());
		System.out.println(linkedList.popFirst());
		System.out.println(linkedList.toString());
	}
	public static void testStack() {
		Stack<Integer> stack = new Stack<>();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		System.out.println(stack.toString());
		System.out.println(stack.peek());
		System.out.println(stack.peek());
		System.out.println(stack.pop());
		System.out.println(stack.toString());
		System.out.println(stack.pop());
		System.out.println(stack.toString());
		System.out.println(stack.size());
	}
	public static void testQueue() {
		Queue<Integer> queue = new Queue<>();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.enqueue(4);
		System.out.println(queue.toString());
		System.out.println(queue.dequeue());
		System.out.println(queue.toString());
		System.out.println(queue.length());
		System.out.println(queue.dequeue());
		System.out.println(queue.toString());
		System.out.println(queue.dequeue());
		System.out.println(queue.toString());
	}
}