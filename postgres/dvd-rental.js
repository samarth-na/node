import { dvdrental } from "../pg.js";
async function fetchData() {
	// Connect to the PostgreSQL database

	console.log("start");

	try {
		// Connect to the PostgreSQL database
		await dvdrental.connect();
		console.log("Connected to PostgreSQL");

		const result = await dvdrental.query("SELECT * FROM film ;");
		console.log("Query result:", result.rows);
		// Example query
	} catch (err) {
		console.error("Database error:", err.message);
	} finally {
		await dvdrental.end();
	}
}

fetchData();
