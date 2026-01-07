

function loader(arr){
    let left = 0;
    let right = arr.length-1;
    let temp;
    while(left < right){
      //Time: O(n)
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(loader(arr));
