

function isPrime(x){
    if(x <2 ) return false;
    for (let i = 2; i*i <= x; i++) {
        if(x%i === 0){
            return  false;
        }
    }
        return  true;
}

function loader(n){
    let count =0;
    for (let i = 0; i < n; i++) {
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

console.log(loader(10)); // output: 1



/*
what problem here
function loader(n){

    let count = 0;

    for (let i = 0; i < n; i++) {
        let mount = true;
        let arr = [];
        if (i % 2 === 0) {
            if (mount == true) {
                arr.push(i);
                count++;
            } else {
                break; if once mount false its break here never go to return count give 1
            }
            return count; // returns after first even
        }
    }
}

console.log(loader(10)); // output: 1
*/
