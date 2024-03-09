// https://leetcode.com/problems/minimum-common-value/description/

function getCommon(nums1, nums2) {
  const digits1 = new Map();

  for (let i = 0; i < nums1.length; i++) {
    if (!digits1.has(nums1[i])) digits1.set(nums1[i], i);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (digits1.has(nums2[i])) return nums2[i];
  }

  return -1;
}

console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
