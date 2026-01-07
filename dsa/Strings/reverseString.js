
function loader(input){
    console.log(input.split("").reverse().join(""))
    return input;
}

const input = "milind";
console.log(loader(input));