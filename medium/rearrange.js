function rearrangeArray(nums = []) {
  const positives = [];
  const negatives = [];

  for (const n of nums) {
    if (n > 0) positives.push(n);
    else negatives.push(n);
  }

  const rearrange = [];
  for (let i = 0, p = 0, n = 0; i <= nums.length - 1; i++) {
    if (i % 2 === 0) {
      rearrange.push(positives[p]);
      p++;
    } else {
      rearrange.push(negatives[n]);
      n++;
    }
  }

  return rearrange;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
