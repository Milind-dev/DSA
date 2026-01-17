
function loader(input) {
  const arr = input;
  const max = Math.max(...arr);
  console.log(max) 
  const maxlen = arr.filter(d => d === max).length
  console.log(maxlen)
}
const input = [..."1732070392"].map(Number);
console.log(loader(input));