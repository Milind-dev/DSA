/* var findPeakElement = function(nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[mid + 1]) {
            // peak is at mid or to the left
            high = mid;
        } else {
            // peak is to the right
            low = mid + 1;
        }
    }
    return low; // or high
};

console.log(findPeakElement([5,4,3,2,1]));
 */

function findPeakLinear(nums) {
  const n = nums.length;
  if (n === 1) return 0;
  if (nums[0] >= nums[1]) return 0;
  if (nums[n - 1] >= nums[n - 2]) return n - 1;
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] >= nums[i - 1] && nums[i] >= nums[i + 1]) return i;
  }
  return 0; // fallback (shouldn't happen)
}

console.log(findPeakLinear([6,5,4,3,1]));
