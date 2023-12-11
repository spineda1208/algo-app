package structs;

public class ArrayList<T> {
	private T[] elements;
	private int size;

	@SuppressWarnings("unchecked")
	public ArrayList() {
		this.elements = (T[]) new Object[10];
		this.size = 0;
	}

	@SuppressWarnings("unchecked")
	public ArrayList(int size) {
		this.elements = (T[]) new Object[size];
		this.size = size;
	}

	public void add(T data) {
		if (size == elements.length) {
			resize();
		}
		this.size++;
		elements[this.size] = data;
	}

	public T get(int index) {
		if (index < 0) {
			return this.elements[this.elements.length + index];
		}
		if (index >= size) {
			return null;
		}
		return elements[index];
	}

	public int size() {
		return size;
	}

	@SuppressWarnings("unchecked")
	private void resize() {
		int newCapacity = elements.length * 2;
		T[] newElements = (T[]) new Object[newCapacity];
		System.arraycopy(elements, 0, newElements, 0, size);
		elements = newElements;
	}
}