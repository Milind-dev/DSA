
function loader(arr) {
    // const store = new Array.fill(-1)
        const store = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
         if(arr[i] < arr[j]){
            store[i] = arr[j]
            break;
         }
      }        
    }
    return store;
}

const arr = [13, 7, 6, 12];
console.log(loader(arr));
