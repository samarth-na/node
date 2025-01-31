let len = 10;

let nums = [];

for (let i = 0; i < len; i++) {
	nums.push(Math.floor(Math.random() * 11) - 5); // Random number between -5 and 5
}

// console.log(nums);

let ans = [];

ans.sort((a, b) => a[0] - b[0]); // Sort to avoid duplicate patterns
for (let i = 0; i < nums.length; i++) {
	for (let j = i + 1; j < nums.length; j++) {
		for (let k = j + 1; k < nums.length; k++) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				ans.push([nums[i], nums[j], nums[k]].sort((a, b) => a - b)); // Sort to avoid duplicate patterns
			}
		}
	}
}

// Remove duplicates using a Set
let uniqueTriplets = [];
let seen = new Set();

for (let triplet of ans) {
	let key = JSON.stringify(triplet);
	if (!seen.has(key)) {
		seen.add(key);
		uniqueTriplets.push(triplet);
	}
}

console.log(uniqueTriplets);
