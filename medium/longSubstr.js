function lengthOfLongestSubstring(s) {
  const sub = new Set();
  let maxSub = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!sub.has(s[right])) {
      sub.add(s[right]);
      maxSub = Math.max(maxSub, sub.size);
      right++;
    } else {
      sub.delete(s[left]);
      left++;
    }
  }

  return maxSub;
}

console.log(lengthOfLongestSubstring('abcbbcbb'));
