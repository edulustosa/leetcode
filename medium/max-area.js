// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let area = 0

  let i = 0
  let j = height.length - 1

  while (i < j) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area)

    height[i] < height[j] ? i++ : j--
  }

  return area
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
