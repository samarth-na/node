import { postgres } from "../pg";

class TodoItem {
	title: string;
	description: string;
	status: string;

	constructor(
		title: string,
		description: string,
		status: string = "pending"
	) {
		this.title = title;
		this.description = description;
		this.status = status;
	}
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
	const task = new TodoItem("clean house", "before 9am");

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
