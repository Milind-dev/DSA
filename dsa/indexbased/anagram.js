

function loader(s,t){
    let freq = {}
    if(s.length !== t.length) return false;
    let count = new Array(256).fill(0);

    for(let i=0;i<s.length;i++){
        freq[s[i]] = (freq[s[i]] || 0) +  1       
    }
    for (let i = 0; i < t.length; i++) {
        if(!freq[t[i]]) return false;
        freq[t[i]]--;
    }
    return true;
}

const s = "silent" //listen
const t = "race"
loader(s,t);
console.log(loader(s,t));


/* function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let a = s.split("").sort();
  let b = t.split("").sort();

  let left = 0;
  let right = a.length - 1;

  while (left <= right) {
    if (a[left] !== b[left]) return false;
    if (a[right] !== b[right]) return false;

    left++;
    right--;
  }

  return true;
}

// Examples
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car"));       // false
 */