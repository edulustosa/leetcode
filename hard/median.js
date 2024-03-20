/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArr(nums1, nums2) {
  const merged = [];

  let left = 0;
  let right = 0;

  while (left < nums1.length || right < nums2.length) {
    const n1 = !isNaN(nums1[left]) ? nums1[left] : Infinity;
    const n2 = !isNaN(nums2[right]) ? nums2[right] : Infinity;

    if (n1 < n2) {
      merged.push(n1);
      left += 1;
    } else if (n1 > n2) {
      merged.push(n2);
      right += 1;
    } else {
      merged.push(n1, n2);
      left += 1;
      right += 1;
    }
  }

  if (merged.length % 2 == 0) {
    const n = Math.floor(merged.length / 2) - 1;
    return (merged[n] + merged[n + 1]) / 2;
  } else {
    const n = Math.floor(merged.length / 2);
    return merged[n];
  }
}

console.log(findMedianSortedArr([0, 0], [0, 0]));
