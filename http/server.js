import http from "http";
const PORT = 3001;

function two_X(arr) {
	return typeof arr[10];
}
console.log(two_X([1, 2, 3, 4, 5]));
const server = http.createServer((_req, res) => {
	// res.setHeader("Content-Type", "text/html");

	// res.statusCode = 404;

	res.res.writeHead(200, { "Content-Type": "text/html" });
	res.end("Hello World\n");
});
server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
