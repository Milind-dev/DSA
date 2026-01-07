
function removeDuplicate(input){
    return [...new Set(input)].join("")
}

const input= "abcab";
console.log(removeDuplicate(input));