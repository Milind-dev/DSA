// Next Greater Element
function loader(arr) {
  let left = 0;
  
  while(left < arr.length){
    let right = left + 1;
    let found = false;
    if(arr[right] > arr[left]){
      store.push(arr[right]);
      found = true
      break;
    }
  }

}

console.log(loader([4, 5, 2, 10]));
