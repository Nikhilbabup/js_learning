var lengthOfLongestSubstring = function (s) {
  let charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;
  let end = 0;

  // while (end < s.length) {
  //   if (charIndexMap.has(s[end])) {
  //     start = Math.max(start, charIndexMap.get(s[end]) + 1);
  //   }
  //   charIndexMap.set(s[end], end);
  //   maxLength = Math.max(maxLength, end - start + 1);
  //   end++;
  // }

  while (end < s.length) {
    if (charIndexMap.has(s[end])) {
      start = Math.max(start, charIndexMap.get(s[end]) + 1);
    }
    charIndexMap.set(s[end], end);
    maxLength = Math.max(maxLengthmend - start + 1);
    end++;
  }
  return maxLength;
};

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 (substring "abc")
