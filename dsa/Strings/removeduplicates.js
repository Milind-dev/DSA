
function loader(arr){
    let freq = {};
    let result = "";
    for (const ch of arr) {
        if(!freq[ch]){
            // freq[ch] = true;
            console.log(!freq[ch],ch,freq[ch]);
            
            result  += ch;
        }
    }
    return result
}

const arr = "abcced"
  
console.log(loader(arr));
