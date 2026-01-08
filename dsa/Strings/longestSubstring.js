
function loader(str){
    let map = {};
    let left = 0;
    let maxlen = 0;
    
    for(let right=0;right<str.length;right++){
        if(map[str[right]] >= left){
            left = map[str[right]]  + 1
        }
        map[str[right]] = right;
        maxlen = Math.max(maxlen,right - left + 1);
    }
    return maxlen;
}


const str = "abcabcbb";
console.log(loader(str));