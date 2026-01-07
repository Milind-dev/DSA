
function loader(input){
    const store = {};
    for(let ch of input){
        store[ch] = (store[ch] || 0) +  1;
    }
    return store;
}

const input = "banana";
console.log(loader(input));