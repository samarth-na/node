const numarray = [5, 4, 3, 2, 1, 0];
for (const num of numarray) {
	const index = numarray.indexOf(num);

	console.log("x".repeat(num) + "x".repeat(index));
}

numarray.forEach((num) => {
	const index = numarray.indexOf(num);
	console.log("*".repeat(num) + "*".repeat(index));
});

const _repeat2 = () => {
	for (const num of numarray) {
		const index = numarray.indexOf(num);
		console.log("*".repeat(index));
	}
};

function _curry(fn) {
	return (a) => {
		return (b) => {
			return (c) => {
				return fn(a, b, c);
			};
		};
	};
}
