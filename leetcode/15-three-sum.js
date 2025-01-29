let len = Math.floor(Math.random() * (10 - +3)) + 3;

let nums = [];

for (let i = 0; i < len; i++) {
	nums.push(Math.floor(Math.random() * (5 - +-5)) + -5);
}

// console.log(nums);

let ans = [];

for (let i = 0; i < nums.length; i++) {
	for (let j = 0; j < nums.length; j++) {
		for (let k = 0; k < nums.length; k++) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				ans.push([nums[i], nums[j], nums[k]]);
			}
		}
	}
}

ans.sort();
// console.log(ans);

for (let i = 0; i < ans.length; i++) {
	ans[i].sort();
}

// console.log(ans);

for (let i = 1; i < ans.length; i++) {
	if (ans[i - 1] === ans[i]) {
		ans.pop(i);
	}
}
console.log(ans);
