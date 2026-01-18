// // smallest pair
// function loader(array) {
//   let min1 = Infinity;
//   let min2 = Infinity;

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (min1 > element) {
//       min2 = min1;
//       min1 = min1;
//     } else {
//       min2 = array[index];
//     }
//   }
//   return min1 + min2;

//   // console.log(min1, min2);
// }

// console.log(loader([3, 2, 3, 4, 5, 6]));

// smallest pair
function loader(array) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let ch of array) {
    const element = array[ch]; 3
    if (min1 > element) { 3 > 9
      min2 = min1;   min2 = inf
      min1 = ch;    min1 = 3
    } else {
      min2 = ch;  min2 = 9
    }
  }
  console.log(min1, min2);
  return min1 + min2;

}

console.log(loader([3, 2, 3, 4, 5, 6]));
