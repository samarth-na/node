function palindrome(str = "llk") {
	let len = str.length;
	let mid = len / 2;

	mid = Math.round(mid);

	console.log(mid);
	if (len % 2 === 0) {
		console.log("its even");

		//  qweewq 3
		if (str[mid] !== str[mid - 1]) {
			console.log("not palindrome");

			return false;
		}

		for (let index = 1; index < mid; index++) {
			if (str[mid - (index + 1)] !== str[mid + index]) {
				console.log("not palindrome");

				return false;
			} else {
				console.log("palindrome");

				return true;
			}
		}
	} else {
		mid--;
		console.log("its odd");
		console.log(str[mid]);

		for (let index = 1; index <= mid; index++) {
			if (str[mid - index] !== str[mid + index]) {
				console.log("not palindrome");
				return false;
			} else {
				console.log("palindrome");

				return true;
			}
		}
	}
}
palindrome();
