

function loader(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      //Time: O(n)
      const element = arr[i];
      if (element < min) {
        min = arr[i];
      }
      if (element > max) {
        max = arr[i];
      }
    }
  return [min,max]
}

const arr = [2, 1, 500, 2, 1000];
console.log(loader(arr));