
function merge(arr,temp ,left,mid,right ){
    let i = left;
    let j = mid+1;
    let k = left;
    while(i <= mid && j <= right){
        if (arr[i] < arr[j]) {
          temp[k++] = arr[i++];
        } else {
          temp[k++] = arr[j++];
        }
    }
    while(i <= mid){
        temp[k++] = arr[i++]
    }
    while (j <= right) {
      temp[k++] = arr[j++];
    }
    for (let x = 0; x <= right; x++) {
        arr[x]= temp[x];
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


// ---------- KTH SMALLEST ----------
function kthSmallest(arr, k) {
  const n = arr.length;

  if (k < 1 || k > n) {
    return "Invalid k";
  }

  const temp = new Array(n);

  // Step 1: sort array
  mergeSort(arr, temp, 0, n - 1);

  // Step 2: return k-th smallest
  return arr[k - 1];
}

// ---------- TEST ----------
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

const result = kthSmallest(arr, k);

console.log("Sorted Array:", arr);
console.log(`${k}rd smallest element:`, result);



/*
o(n)
// ---------- PARTITION FUNCTION ----------
function partition(arr, left, right) {
  const pivot = arr[right];   // choose last element as pivot
  let i = left;               // index for smaller elements

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      // swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // place pivot in correct position
  [arr[i], arr[right]] = [arr[right], arr[i]];

  return i; // pivot index
}

// ---------- QUICKSELECT ----------
function kthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return "Invalid k";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pivotIndex = partition(arr, left, right);

    // if pivot is the k-th smallest
    if (pivotIndex === k - 1) {
      return arr[pivotIndex];
    }
    // search left part
    else if (pivotIndex > k - 1) {
      right = pivotIndex - 1;
    }
    // search right part
    else {
      left = pivotIndex + 1;
    }
  }
}

// ---------- TEST ----------
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

const result = kthSmallest(arr, k);

console.log("K-th Smallest Element:", result);
console.log("Array after operation:", arr);


*/