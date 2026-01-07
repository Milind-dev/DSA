
// https://leetcode.com/problems/largest-number/description/?envType=problem-list-v2&envId=array
function largestNumber(nums){
    if(!nums || nums.length < 0) return "";
    const strs = nums.map(String);
    console.log(strs)
    nums.sort((a,b) => {
        const ab = a + b;
        const ba = b + a;
        if(ab < ba){
            return 1;
        }
        else{
            return  -1;
        }
        return  0;
    });

    if(strs[0] === "0") return 0;

    return strs.join("")
}


console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"


