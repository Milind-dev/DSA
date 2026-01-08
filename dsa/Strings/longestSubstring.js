
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


/* 
function longestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1
console.log(longestSubstring("pwwkew"));   // 3

*/