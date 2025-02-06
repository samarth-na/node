import type { num } from "../../types";

export function binRecursion(arr: num[], target: num, left: num, right: num) {
	if (left > right) {
		console.log("its not in list");
		return -1;
	}

	let mid = Math.floor(left + (right - left) / 2);

	if (arr[mid] === target) {
		console.log("its here");
		return mid;
	} else if (target < arr[mid]) {
		return binRecursion(arr, target, left, arr[mid] - 1);
	} else if (arr[mid] < target) {
		return binRecursion(arr, target, arr[mid] + 1, right);
	}
}
