const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolved");
	}, 1000);
});
