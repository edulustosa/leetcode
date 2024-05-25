// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = '';
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    prefix += firstWord[i];

    for (let j = 1; j < strs.length; j++) {
      const word = strs[j];

      if (!word.startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        break;
      }
    }

    if (!prefix.endsWith(firstWord[i])) break;
  }

  return prefix;
}

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
