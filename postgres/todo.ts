import { postgres } from "../pg";

interface TodoItem {
	title: string;
	description: string;
	status: string;
}

// TODO:
// add item
// delete item
// toggle todo

export async function printRows(): Promise<void> {
	const result = await postgres.query("SELECT * FROM todolist ;");
	console.log(result.rows);
}

function Input(): TodoItem {
	let task: TodoItem = { title: "", description: "", status: "" };
	return task;
}

export async function addItem(todotask: TodoItem): Promise<void> {
	const query = `
            INSERT INTO todolist (title, description)
            VALUES ($1, $2)
            RETURNING *;
        `;

	const values = [todotask.title, todotask.description];
	const res = await postgres.query(query, values);

	console.log("item inserted");

	console.log("Inserted item:", res.rows[0]);
}

async function main() {
	await postgres.connect();

	await printRows();

	await postgres.end();
}

main();
// vim: ts=4 sts=4 sw=4 et
