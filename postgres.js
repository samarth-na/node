import pkg from "pg";
const { Client } = pkg;

const pgp = process.env.pgp;

export const dvdrental = new Client({
    host: "localhost", // or your server address
    port: 5432, // PostgreSQL default port
    user: "postgres",
    password: pgp,
    database: "dvdrental",
});

export const postgres = new Client({
    host: "localhost", // or your server address
    port: 5432, // PostgreSQL default port
    user: "postgres",
    password: pgp,
    database: "postgres",
});
console.log("e");
//await postgres.connect();
//const result = await postgres.query("SELECT * FROM todolist ;");
//console.log(result.rows);
//
//await postgres.end();
