let string = (n) => {
	let str = "";
	for (let i = 0; i < n; i++) {
		i % 2 != 0 ? (str += "K") : (str += "J");
	}
	console.log(str);
};
string(10);
