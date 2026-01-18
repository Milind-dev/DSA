//moves zeros
function loader(arr) {
   let numstr = ""
   let chstr = ""
   for(let ch of arr){
    if(ch === 0){
      chstr += "" + 0;
    }  
    else{
      numstr += ch;
    }
   }
   return (numstr + chstr).split("").map(Number).join("")
}


console.log(loader([1,2,0,1,3,0])); // 3
