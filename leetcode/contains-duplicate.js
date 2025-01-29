function hasDuplicates(nums) {
	nums.sort((a, b) => a - b); // Ensure numerical sorting
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) return true;
	}
	return false;
}

var containsDuplicate = function (nums) {
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true;
		set.add(nums[i]);
	}
	return false;
};

var containsDuplicate = function (nums) {
	let seen = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (seen.has(nums[i])) {
			return true;
			break;
		} else {
			seen.add(nums[i]);
		}
	}
	return false;
};
