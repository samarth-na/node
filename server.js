import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// API route
app.get("/api/data", (_req, res) => {
	res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
// Route to receive data from the frontend
app.post("/api/data", (req, res) => {
	const receivedData = req.body;
	console.log("Received data:", receivedData);
	res.json({ message: "Data received successfully", data: receivedData });
});
