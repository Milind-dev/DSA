  
function loader(arr){
    let freq = {};
   for (const element of arr) {
        freq[element] = (freq[element] || 0) + 1;
   }
   return freq;

}
const arr = [1, 2, 2, 3, 1, 4, 2];
console.log(loader(arr));  

 
/* function loader(arr){
    let freq = {};
    let left = 0;
    while(left <= arr.length-1){
        freq[arr[left]] = (freq[arr[left]] || 0) + 1
        // arr.length--;
        left++
    }
    return freq;

}

const arr = [1, 2, 2, 3, 1, 4, 2];
console.log(loader(arr)); 
 */