const arr: number[] = [2, 3, 4, 5, 6, 7, 8];

function revbin(arr: number[]) {
	const len = arr.length;
	const mid = Math.round(arr.length / 2) - 1;

	console.log(len, mid, arr[mid], "\n");

	if (len % 2 === 0) {
		console.log("even");

		for (let i = 0; i <= mid; i++) {
			const temp = arr[i];

			arr[i] = arr[len - i - 1];
			arr[len - i - 1] = temp;
		}
	} else {
		console.log("odd");

		for (let i = 1; i <= mid; i++) {
			const temp = arr[mid - i];

			arr[mid - i] = arr[mid + i];
			arr[mid + i] = temp;
		}
	}

	console.log(arr);

	return arr;
}
revbin(arr);
