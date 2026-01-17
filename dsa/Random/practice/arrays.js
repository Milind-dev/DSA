
function loader(input) {
    const arr = input.split("")
    let count = 0;
    for(let ch of arr){
        if(ch === "i"){
            count++;
        }
        // count = 1;
    }
    return count;
}
const input = "milind";
console.log(loader(input));