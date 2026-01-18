function longestUniqueSubstring(arr) {
  const set = new Set();
  let left = 0;
  let maxlen = 0;
  for (let right = 0; right < arr.length; right++) {
    if (set.has(arr[right])) {
      set.delete(arr[left]);
      left++;
    }
    set.add(arr[right]);
    maxlen = Math.max(maxlen, right - left + 1);
  }
  return maxlen, set;
}

const arr = "abba";
console.log(longestUniqueSubstring(arr));
