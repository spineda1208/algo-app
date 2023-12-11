package sort;

public class Sort {
	public void bubbleSort(int[] array) {
		for (int i = 0; i < array.length; i++) {
			for (int j = 0; j < array.length - 1 - i; j++) {
				if (array[j] > array[j + 1]) {
					int temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
		}
	}

	public void quickSort(int[] array, int low, int high) {
		if (low >= high) {
			return;
		}
		int pivot_index = partition(array, low, high);
		quickSort(array, low, pivot_index - 1);
		quickSort(array, pivot_index + 1, high);
	}

	public int partition(int[] array, int low, int high) {
		int pivot = array[low + Math.floorDiv((high - low), 2)];
		int index = low - 1;

		for (int i = low; i < high; i++) {
			if (array[i] <= pivot) {
				index++;
				int temp = array[i];
				array[i] = array[index];
				array[index] = temp;
			}
		}
		index++;
		array[high] = array[index];
		array[index] = pivot;
		return index;
	}

	public void mergeSort(int[] array, int low, int high) {
		if (low <= high) {
			int middle = low + (high - low) / 2;
			mergeSort(array, low, middle);
			mergeSort(array, middle + 1, high);
			merge(array, low, middle, high);
		}
	}

	public void merge(int[] array, int low, int middle, int high) {
		int n1 = middle - low + 1;
		int n2 = high - middle;

		int[] lowArray = new int[n1];
		int[] highArray = new int[n2];

		for (int i = 0; i < n1; ++i) {
			lowArray[i] = array[low + i];
		}
		for (int j = 0; j < n2; ++j) {
			highArray[j] = array[middle + 1 + j];
		}

		int i = 0, j = 0;
		int k = low;
		while (i < n1 && j < n2) {
			if (lowArray[i] <= highArray[j]) {
				array[k] = lowArray[i];
				i++;
			} else {
				array[k] = highArray[j];
				j++;
			}
			k++;
		}

		while (i < n1) {
			array[k] = lowArray[i];
			i++;
			k++;
		}

		while (j < n2) {
			array[k] = highArray[j];
			j++;
			k++;
		}
	}

	public void selectionSort(int[] array) {
		for (int i = 0; i < array.length - 1; i++) {
			int minIndex = i;
			for (int j = i + 1; j < array.length; j++) {
				if (array[j] < array[minIndex]) {
					minIndex = j;
				}
			}
			int temp = array[minIndex];
			array[minIndex] = array[i];
			array[i] = temp;
		}
	}

	public void insertionSort(int[] array) {
		for (int i = 1; i < array.length; i++) {
			int key = array[i];
			int j = i - 1;
			while (j >= 0 && array[j] > key) {
				array[j + 1] = array[j];
				j--;
			}
			array[j + 1] = key;
		}
	}

}
