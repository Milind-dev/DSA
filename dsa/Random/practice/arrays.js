//moves zeos
function moveZeros(arr) {
  let result = [];
  let zeros = [];

  for (let n of arr) {
    n === 0 ? zeros.push(0) : result.push(n);
  }
  return result.concat(zeros);
}

console.log(loader([1, 2, 0, 1, 3, 0])); // 3
