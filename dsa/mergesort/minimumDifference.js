// // ---------- MERGE FUNCTION ----------
// function merge(arr, temp, left, mid, right) {
//   let i = left; // pointer for left part
//   let j = mid + 1; // pointer for right part
//   let k = left; // pointer for temp array

//   // merge both halves in sorted order
//   while (i <= mid && j <= right) {
//     if (arr[i] <= arr[j]) {
//       temp[k++] = arr[i++];
//     } else {
//       temp[k++] = arr[j++];
//     }
//   }

//   // copy remaining elements of left half
//   while (i <= mid) {
//     temp[k++] = arr[i++];
//   }

//   // copy remaining elements of right half
//   while (j <= right) {
//     temp[k++] = arr[j++];
//   }

//   // copy sorted elements back to original array
//   for (let x = left; x <= right; x++) {
//     arr[x] = temp[x];
//   }
// }

// // ---------- MERGE SORT FUNCTION ----------
// function mergeSort(arr, temp, left, right) {
//   if (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     mergeSort(arr, temp, left, mid);
//     mergeSort(arr, temp, mid + 1, right);
//     merge(arr, temp, left, mid, right);
//   }
// }

// // ---------- MINIMUM DIFFERENCE FUNCTION ----------
// function minimumDifference(arr) {
//   const n = arr.length;
//   if (n < 2) return 0;

//   const temp = new Array(n);

//   // Step 1: sort array using merge sort
//   mergeSort(arr, temp, 0, n - 1);

//   // Step 2: find minimum difference
//   let minDiff = Infinity;
//   for (let i = 1; i < n; i++) {
//     const diff = arr[i] - arr[i - 1];
//     if (diff < minDiff) {
//       minDiff = diff;
//     }
//   }

//   return minDiff;
// }


// // ---------- TEST WITH TIME ----------
// const arr = [4, 9, 1, 32]; 
// const result = minimumDifference(arr); 
// console.log("Sorted Array:", arr); // [1, 4, 9, 32] console.log("Minimum Difference:", result); // 3
// // const arr = [1, 4, 9, 32];
// const N = 100000; // try increasing this

// for (let i = 0; i < N; i++) {
//   arr.push(Math.floor(Math.random() * 1000000));
// }

// console.time("Minimum Difference Time");
// // const result = minimumDifference(arr);
// console.timeEnd("Minimum Difference Time");

// console.log("Minimum Difference:", result);



let mergeOperations = 0;
let sortCalls = 0;

function merge(arr, temp, left, mid, right) {
  let i = left,
    j = mid + 1,
    k = left;

  while (i <= mid && j <= right) {
    mergeOperations++;
    if (arr[i] <= arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let x = left; x <= right; x++) arr[x] = temp[x];
}

function mergeSort(arr, temp, left, right) {
  sortCalls++;
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, temp, left, mid);
    mergeSort(arr, temp, mid + 1, right);
    merge(arr, temp, left, mid, right);
  }
}

function minimumDifference(arr) {
  const temp = new Array(arr.length);
  mergeSort(arr, temp, 0, arr.length - 1);

  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  return minDiff;
}

// TEST
const arr = [1,3,2,1,6,4,7,5,3,7,9,0,12,43,12,54,5,2,2,4,555,63,24];
const N = 16;

for (let i = 0; i < N; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

minimumDifference(arr);

console.log("Merge comparisons:", mergeOperations);
console.log("MergeSort calls:", sortCalls);
