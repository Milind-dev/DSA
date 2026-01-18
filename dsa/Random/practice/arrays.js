//alternative subarryys

function loader(arr) {
  let left = 0;
  let right = 1;
  let maxlen = 1;

  while(right < arr.length){
    if(arr[right] !== arr[right-1]){
      maxlen = Math.max(maxlen,right - left+1);
    }
    else{
      //now update left when condition fully above when its equal
      left = right; //index
    }
    right++;
  }
  return maxlen;

}


console.log(loader([1,0,1,0,1,1,0,0,1])); // 5
