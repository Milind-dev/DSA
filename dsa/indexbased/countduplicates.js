
function loader(arr){
    let freq = {}
    let count = 0;

    for (let element of arr) {
        freq[element] = (freq[element] || 0) + 1;
        console.log("freq = ",freq , " freq[element] = ", freq[element]); 
    }
    for (const key in freq) {
        // console.log(freq[key])
         console.log("freq[key]", freq[key]); 
         if(freq[key] > 1){
            count += freq[key] - 1;
         }
    }


    return count;
}
const arr = [1, 2, 3, 2, 3, 3]
console.log(loader(arr));





/* function loader(arr) {
  let freq = {};
  let duplicateCount = 0;

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

const arr = [1, 2, 3, 2, 3, 3];
console.log(loader(arr)); // 2 (2 and 3)
 */