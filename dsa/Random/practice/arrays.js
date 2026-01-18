//moves zeros
function loader(arr) {
  let store = []
  let zeros = []
  let result = []
  for(let ch of arr){
    if(ch ===0){
      zeros.push(ch);
    }
    else{
      result.push(ch);
    }
  }
  return result.concat(zeros)
}


console.log(loader([1,2,0,1,3,0])); // 3
