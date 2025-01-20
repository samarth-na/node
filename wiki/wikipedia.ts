async function getData(params: string) {
	const link = `https://en.wikipedia.org/w/api.php?action=opensearch&format=xml&search=${params}&namespace=0&limit=10&formatversion=2`;
	const response = await fetch(link);
	const data = await response.text(); // Correctly fetch the XML as text
	console.log(data);
}

async function main() {
	getData("java");
}

main();
