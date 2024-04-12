// https://leetcode.com/problems/single-number-ii/description/

function singleNumber(nums) {
  const numbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (numbers.has(n)) numbers.set(n, numbers.get(n) + 1);
    else numbers.set(n, 1);
  }

  for (const n of numbers) {
    if (n[1] == 1) return n[0];
  }
}

console.log(singleNumber([2, 2, 3, 2]));
