let arr: number[] = [1, 2, 3, 4, 4, 5, 6];

function rev(arr: number[]) {
	let newarr: number[] = [];
	let len: number = arr.length - 1;

	for (len; len >= 0; len--) {
		console.log(len);
		newarr.push(arr[len]);
	}

	return newarr;
}
console.log(rev(arr));

//let arra = 1;
//let arrr = 2;
//let temp = arra;
//
//console.log(arra, arrr);
//
//arra = arrr;
//arrr = temp;
//
//console.log(arra, arrr);
