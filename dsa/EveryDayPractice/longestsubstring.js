// function longestSubstring(s) {
//   let set = new Set();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }



function longestSubstring(s) {
  let map = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


