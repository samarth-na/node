function isAnagram(stringA: string | any[], stringB: string): boolean {
	if (stringA.length !== stringB.length) return false;
	for (let i of stringA) {
		for (let j of stringB) {
			console.log(i, j);
			if (i === j) {
				stringB = stringB.replace(i, "");
				break;
			}
		}
	}
	if (stringB.length === 0) return true;
	else return false;
}
let a = isAnagram("car", "cra");
console.log(a);
