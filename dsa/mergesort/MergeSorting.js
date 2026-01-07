
function merge(arr,temp,left,mid,right){
    let i = left;
    let j = mid+1;
    let k = left;

    while(i <= mid && j <= right){
        if(arr[i] < arr[j]){
            temp[k++] = arr[i++]; // temp is different array and i increament and stored to temp array
        }
        else{
            temp[k++] = arr[j++];  
            //[2,5,8 | 4,5]
            inv += (mid-i+1); // inv += 2-0+1 => 3 
        }
    }
    //remaining index value store both
    while(i < mid ){
        temp[k++] = arr[i++];
    }
    while(j<right){
        temp[k++] = arr[j++];
    }

    //arr are array not temp thats why use for with left to right

    for(let x = left;x<right;x++){
        arr[x] = temp[x];
    }

    return inv;
}

function mergeSort(arr, temp, mid, right) {
  let inv = 0;
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    inv += mergeSort(arr, temp, left, right);
    inv += mergeSort(arr, temp, mid + 1, right);
    inv += mergeSort(arr, temp, left, mid, right);
  }
  return inv;
}

// Test
const arr = [3, 1, 2];
const temp = new Array(arr.length);
const inversions = mergeSort(arr, temp, 0, arr.length - 1);







/*


function merge(arr, temp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;
  let inv = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
      inv += (mid - i + 1); // key logic
    }
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let x = left; x <= right; x++) {
    arr[x] = temp[x];
  }

  return inv;
}

function mergeSort(arr, temp, left, right) {
  let inv = 0;

  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    inv += mergeSort(arr, temp, left, mid);
    inv += mergeSort(arr, temp, mid + 1, right);
    inv += merge(arr, temp, left, mid, right);
  }

  return inv;
}

// Test
const arr = [3, 1, 2];
const temp = new Array(arr.length);
const inversions = mergeSort(arr, temp, 0, arr.length - 1);

console.log(arr);        // [1, 2, 3]
console.log(inversions); // 2


*/