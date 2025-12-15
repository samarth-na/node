import { postgres } from "../pg";

await postgres.connect();

const result = await postgres.query("SELECT * FROM todolist ;");
console.log(typeof result);
const rows = result.rows;

console.log(rows);

await postgres.end();

// vim: ts=4 sts=4 sw=4 et
