let nem;

function sync() {
	return `Hello,!`;
}

function async(callback) {
	console.log("hello");
	setTimeout(() => {
		nem = "sam";
		console.log("i got the name");
		callback(nem);
	}, 2000);
	console.log(nem);
}
async();
