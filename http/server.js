import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
	// res.setHeader("Content-Type", "text/html");
	// res.statusCode = 404;

	res.res.writeHead(200, { "Content-Type": "text/html" });
	res.end("Hello World\n");
});
server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
