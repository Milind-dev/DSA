function longestSubarray(nums) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // subtract 1 because we must delete one element
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
}


console.log(longestSubarray([1,1,0,1]));      // 3
console.log(longestSubarray([0,1,1,1,0,1]));  // 4
console.log(longestSubarray([1,1,1]));        // 2
