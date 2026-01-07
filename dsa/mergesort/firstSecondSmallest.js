// ---------- MERGE FUNCTION ----------
function merge(arr, temp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let x = left; x <= right; x++) {
    arr[x] = temp[x];
  }
}

// ---------- MERGE SORT ----------
function mergeSort(arr, temp, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, temp, left, mid);
    mergeSort(arr, temp, mid + 1, right);
    merge(arr, temp, left, mid, right);
  }
}

// ---------- SMALLEST & SECOND SMALLEST ----------
function smallestAndSecondSmallest(arr) {
  const n = arr.length;
  if (n < 2) {
    return "Second smallest does not exist";
  }

  const temp = new Array(n);

  // Step 1: sort using merge sort
  mergeSort(arr, temp, 0, n - 1);

  const smallest = arr[0];
  let secondSmallest = null;

  // Step 2: find first element greater than smallest
  for (let i = 1; i < n; i++) {
    if (arr[i] > smallest) {
      secondSmallest = arr[i];
      break;
    }
  }

  if (secondSmallest === null) {
    return "Second smallest does not exist";
  }

  return {
    smallest,
    secondSmallest,
  };
}

// ---------- TEST ----------
const arr = [12, 13, 1, 10, 34, 1];
const result = smallestAndSecondSmallest(arr);

console.log("Sorted Array:", arr);
console.log(result);



/* function smallestAndSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Not possible";
  }

  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x > min1 && x < min2) {
      min2 = x;
    }
  }

  if (min2 === Infinity) {
    return "Not possible"; // all elements same
  }

  return {
    smallest: min1,
    secondSmallest: min2
  };
}

// Test
console.log(smallestAndSecondSmallest([4, 2, 1, 3]));
// { smallest: 1, secondSmallest: 3 }


o(n)

problem and approach and dry run and then code javascript merge sort problem

Dry Run Very Important  step wise show

Same dry run but on simpler array Dry run with index-based merge (no slice)

step by step code to me and teach me line by line write
*/