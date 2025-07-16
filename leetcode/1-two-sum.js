function twoSum(nums, target) {
    const len = nums.length;

    for (let i = 0; i <= len; i++) {
        for (let i2 = i + 1; i2 <= len; i2++) {
            if (nums[i] + nums[i2] === target) {
                return [i, i2];
            }
        }
    }
    return [];
}

function main() {
    let indexes = twoSum([1, 2, 3, 3, 4, 5, 6], 6);
    console.log(indexes);
}
main();
