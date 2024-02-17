function twoSum(nums, target) {
  const digits = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (digits.has(rest)) return [digits.get(rest), i];
    digits.set(nums[i], i);
  }
}

console.log(twoSum([3, 2, 4], 6));
