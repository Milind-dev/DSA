/*
    function loader(init){
        // console.log(init.includes("Ab"))
        return init.includes("Ab");
    }
    const init = "AbABCabc";
    console.log(init.indexOf("c"))
    console.log(init.toLowerCase().includes("Abc".toLowerCase()))
    console.log(init)
*/

function containsABC(s) {
    return s.includes('A') && s.includes('B') && s.includes('C');
}

console.log(containsABC("ADOBECODEBANC")); // true
console.log(containsABC("HELLOWORLD"));   //  false
