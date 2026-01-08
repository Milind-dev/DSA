
function loader(arr) {
let n = arr.length-1;
if(n === 1) return 0;

if(arr[0] > arr[1]) return 0;
if(arr[n-1] >= arr[n-2]) return n-1;
 for (let i = 1; i < n; i++) {
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]){
            return i;
        }    
 }  
}

const arr = [1,2,3,4,6,5];
console.log(loader(arr));
