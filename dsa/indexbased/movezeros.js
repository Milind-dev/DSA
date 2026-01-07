

/* 
function loader(arr){
    let zeros = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            zeros++;
        }    
        else{
            result.push(arr[i])
        }
    }
    for (let i = 0; i < zeros; i++) {
        result.push(0)
    }
    return result;
}

const arr = [0, 1, 0, 3, 12];
console.log(loader(arr)); // [1,3,12,0,0] */


/* function moveZeroes(arr) {
  let j = 0; // index for next non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

// Example
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
 */