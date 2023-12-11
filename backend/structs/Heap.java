package structs;

public class Heap {
	private int[] heapArray;
	private int size;

	public Heap(int capacity) {
		heapArray = new int[capacity];
		size = 0;
	}

	public void insert(int value) {
		if (size == heapArray.length) {
			throw new IllegalStateException("Heap full");
		}

		heapArray[size] = value;
		heapifyUp(size);
		size++;
	}

	public int remove() {
		if (size == 0) {
			throw new IllegalStateException("Heap empty");
		}

		int root = heapArray[0];
		heapArray[0] = heapArray[size - 1];
		size--;
		heapifyDown(0);

		return root;
	}

	private void heapifyUp(int index) {
		int parentIndex = (index - 1) / 2;

		while (index > 0 && heapArray[index] > heapArray[parentIndex]) {
			swap(index, parentIndex);
			index = parentIndex;
			parentIndex = (index - 1) / 2;
		}
	}

	private void heapifyDown(int index) {
		int leftChildIndex = 2 * index + 1;
		int rightChildIndex = 2 * index + 2;
		int largestIndex = index;

		if (leftChildIndex < size && heapArray[leftChildIndex] > heapArray[largestIndex]) {
			largestIndex = leftChildIndex;
		}

		if (rightChildIndex < size && heapArray[rightChildIndex] > heapArray[largestIndex]) {
			largestIndex = rightChildIndex;
		}

		if (largestIndex != index) {
			swap(index, largestIndex);
			heapifyDown(largestIndex);
		}
	}

	private void swap(int i, int j) {
		int temp = heapArray[i];
		heapArray[i] = heapArray[j];
		heapArray[j] = temp;
	}
}
