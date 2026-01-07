

//pure function
function loader(str) {
  const freq = new Array(256).fill(0);
  
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < str.length; i++) {
    if (freq[str.charCodeAt(i)] === 1) {
      console.log(str[i]);
      return str[i];
    }
  }
}

loader("aabbcddee"); // c

/* index based 
function loader(str){
    const arr = str.split("");
    const freq = {};

    for(let i in arr){
        freq[arr[i]] = (freq[arr[i]] || 0 ) + 1 
    }

    for(let i in arr){
        if(freq[arr[i]] == 1){
            return arr[i];
        }
    }
}
 */
// value 
/* function loader(arr) {
    let freq  = {};
    for (const element of arr) {
        freq[element] = (freq[element] || 0) + 1;   
    }
    for(const ch of arr){
        if(freq[ch] === 1){
            console.log(ch);
            return ch;
        }
    }
    
} */

const arr = "aabbcddeef";
console.log(loader(arr));



/*
function loader(str) {
  const freq = {};
  
  // Step 1: count frequency
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Step 2: find first non-repeating
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }

  return -1; // if none found
}

const arr = "aabbcddee";
console.log(loader(arr)); // 👉 c

*/
