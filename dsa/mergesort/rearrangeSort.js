function canRearrange(arr) {
  const n = arr.length;
  const temp = new Array(n);

  // Step 1: Sort using merge sort
  mergeSort(arr, temp, 0, n - 1);

  // Step 2: Check adjacent differences
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > 1) {
      return "NO";
    }
  }

  return "YES";
}

// Example
const arr1 = [1, 3, 2];
console.log(canRearrange(arr1)); // YES

const arr2 = [1, 4, 2];
console.log(canRearrange(arr2)); // NO
