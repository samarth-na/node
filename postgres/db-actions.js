export async function connect_db(name) {
	await name.connect();
	console.log(`connected to ${name.database}`);
}

export async function dissconnect_db(name) {
	await name.end();
	console.log(`dissconnected to ${name.database}`);
}
