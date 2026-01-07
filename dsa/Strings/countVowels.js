function countVowels(str) {
    const vowels = "aeiouAEIOU"; // constant (isme value change nahi hogi)
    let count = 0;               // count change hoga → let

    for (let ch of str) {
        console.log(ch,vowels.includes(ch))
        if (vowels.includes(ch)) {
            count++; // value BADAL rahi hai → let hi use hoga
        }
    }
    return count;
}

const input = "Sachin";
const n = countVowels.length;
console.log(countVowels(input,n));