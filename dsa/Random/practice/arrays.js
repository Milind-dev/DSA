
function loader(input) {
    return input.split("").map(Number).reduce((max,curr) => {
        return curr > max ? curr:max;
    })
    
//     let arr = input.split("").map(Number);
//     let maxelement = arr[0]
//   // Frequency count
//   for (let ch of arr) {
//     if (ch > maxelement) {
//       maxelement = ch;
//     }
//   }
  
//   return maxelement;
}
const input = "1732070392";
console.log(loader(input));