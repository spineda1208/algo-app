
// import structs.*;
import java.util.Arrays;
import java.util.Random;

import sort.Sort;
// import search.Search;

public class Test {
	public static void main(String[] args) {
		Test test = new Test();
		Sort sort = new Sort();

		int[] array = test.randIntArray(0, 100, 25);

		System.out.println(Arrays.toString(array));

		// sort.selectionSort(array);
		sort.insertionSort(array);
		// sort.quickSort(array, 0, array.length - 1);

		System.out.println(Arrays.toString(array));
	}

	public int[] randIntArray(int low, int high, int size) {
		Random random = new Random();
		int[] array = new int[size];
		for (int i = 0; i < size; i++) {
			array[i] = random.nextInt(low, high);
		}
		return array;
	}
}