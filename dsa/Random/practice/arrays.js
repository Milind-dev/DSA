
function loader(input) {
    let arr = input.split("").map(Number);
    let maxelement = arr[0]

  // Frequency count
  for (let ch of arr) {
    if (ch > maxelement) {
      maxelement = ch;
    }
  }
  
  return maxelement;
}
const input = "173207032";
console.log(loader(input));