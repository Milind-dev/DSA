function loader(nums, target = 8) {

    // helper function to find first or last
    function search(first) {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                if (first) {
                    right = mid - 1; // continue left side
                } else {
                    left = mid + 1; // continue right side
                }
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return ans;
    }

    return [search(true), search(false)];
}


const nums = [5, 7, 7, 8, 8, 10];
console.log(loader(nums));
// Output → [3, 4]
