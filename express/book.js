import express, { json } from "express";
const app = express();

// Use express.json() middleware to parse JSON request bodies
app.use(json());

// In-memory array to store book data
let books = [
	{ id: 1, title: "1984", author: "George Orwell" },
	{ id: 2, title: "Brave New World", author: "Aldous Huxley" },
];

// GET /books - Retrieve all books
app.get("/books", (_req, res) => {
	res.json(books);
});

// GET /books/:id - Retrieve a single book by id
app.get("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const book = books.find((b) => b.id === id);

	if (book) {
		res.json(book);
	} else {
		res.status(404).json({ error: "Book not found" });
	}
});

// POST /books - Create a new book
app.post("/books", (req, res) => {
	const newBook = req.body;

	// Simple validation: check if title and author are provided
	if (!newBook.title || !newBook.author) {
		return res.status(400).json({ error: "Title and author are required" });
	}

	// Assign an ID to the new book
	newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
	books.push(newBook);

	res.status(201).json(newBook);
});

// PUT /books/:id - Update an existing book
app.put("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const existingBook = books.find((b) => b.id === id);

	if (!existingBook) {
		return res.status(404).json({ error: "Book not found" });
	}

	// Update book details
	const updatedBook = { ...existingBook, ...req.body };
	books = books.map((b) => (b.id === id ? updatedBook : b));

	res.json(updatedBook);
});

// DELETE /books/:id - Delete a book
app.delete("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const bookIndex = books.findIndex((b) => b.id === id);

	if (bookIndex === -1) {
		return res.status(404).json({ error: "Book not found" });
	}

	// Remove book from the array

	const deletedBook = books.splice(bookIndex, 1);
	res.json({ message: "Book deleted successfully", book: deletedBook[0] });
});

// Start the Express server on port 3000

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
