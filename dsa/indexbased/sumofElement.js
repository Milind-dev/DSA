
function loader(arr){
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum;
/*     let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; */
}

const arr = [1, 2, 3, 4];
console.log(loader(arr));


// const sum = arr.reduce((acc,val) => acc + val,0 );