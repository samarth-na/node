function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let resultArray = [],
		leftIndex = 0,
		rightIndex = 0;

	// Concatenate values into resultArray in sorted order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++; // move left array cursor
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++; // move right array cursor
		}
	}

	// Concatenate the remaining elements
	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

// Example usage:
const array = [8, 3, 5, 4, 7, 6, 1, 2];
const sortedArray = mergeSort(array);
console.log(sortedArray);
