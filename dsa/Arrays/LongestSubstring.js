

function longestSubstringOptimized(s) {
    const lastIndex = new Map(); // char -> last index seen
    let maxLen = 0;
    let start = 0; // window start (inclusive)

    for (let j = 0; j < s.length; j++) {
        const ch = s[j];

        // if we've seen ch and it's inside current window, jump start
        if (lastIndex.has(ch) && lastIndex.get(ch) >= start) {
            start = lastIndex.get(ch) + 1;
        }

        // update last seen index for ch
        lastIndex.set(ch, j);

        // window length is (j - start + 1)
        maxLen = Math.max(maxLen, j - start + 1);
    }

    return maxLen;
}

// quick test
console.log(longestSubstringOptimized("pwwkew")); // 3



/*
function longestSubstring(str) {
    let maxLen = 0;
    for (let i = 0; i < str.length ; i++) {
        let set = new Set();
        for (let j = i; j < str.length; j++) {
            if(set.has(str[j])) break;
            set.add(str[j]);
            maxLen = Math.max(maxLen,j-i+1);
        }
    }
    return maxLen;
}
*/



/*
function longestSubstring(s) {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let temp = "";

        for (let j = i; j < s.length; j++) {
            // console.log("includes = " ,s[j],temp += s[j] );
            if (temp.includes(s[j])) {
                break; // duplicate found → stop
            }

            temp += s[j]; // add character to temp
            maxLen = Math.max(maxLen, temp.length);
        }
    }

    return maxLen;
}
*/


const longsubstr = "pwwkew";
console.log(longestSubstring(longsubstr));