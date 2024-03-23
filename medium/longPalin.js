// https://leetcode.com/problems/longest-palindromic-substring/description/

function longestPalindrome(s) {
  if (s.length === 1) return s[0];

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  let longest = '';

  for (let i = 0; i < s.length; i++) {
    const evenPalindrome = expandFromCenter(i, i);
    const oddPalindrome = expandFromCenter(i, i + 1);

    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
  }

  return longest;
}

console.log(longestPalindrome('baabd'));
