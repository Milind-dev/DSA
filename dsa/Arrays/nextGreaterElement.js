
function nextGreaterElement(input){
    let n = input.length;
    let store = new Array(n).fill(-1);
    let stack = []; // will hold indices

    for (let i = 0; i < n; i++) {
        while(stack.length && nums[i] > nums[ stack[stack.length -1]]){
            store[stack.pop()] = nums[i];
        }
    }
}
/*
function nextGreaterElement(nums) {
    let store = new Array(nums.length).fill(-1);
    console.log("store = " , store);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <nums.length; j++) {
            // console.log("before sote  = ", store[i],nums[j] , store);

            if(nums[i] < nums[j]){
                store[i] = nums[j];
                console.log("after sote  = ", store[i],nums[j] , store);
                break;
            }

        }
    }
}   
*/

console.log(nextGreaterElement([1,2,3,4,5]));