function loader(arr) {
  let left = 0;
  let right = 1;

  let min = arr[0];
  let max = arr[0];

  while (right < arr.length) {
    // adjacent comparison
    if (arr[left] > arr[right]) {
      if (arr[right] < min) min = arr[right];
      if (arr[left] > max) max = arr[left];
    } else if (arr[left] < arr[right]) {
      if (arr[left] < min) min = arr[left];
      if (arr[right] > max) max = arr[right];
    } else {
      // equal case
      if (arr[left] < min) min = arr[left];
      if (arr[left] > max) max = arr[left];
    }

    // move window
    left++;
    right++;
  }

  return { min, max };
}

console.log(loader([1, 2, 0, 1, 3, 0]));
// { min: 0, max: 3 }
