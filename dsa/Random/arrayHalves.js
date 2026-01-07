// function minOperationPerm(input,n){
//     let pos = [];
//     for (let i = 0; i < 2*n; i++) {
//         if(input[i] <= n){
//             pos.push(i); 
//         }
//         console.log(pos);
        
//     }
//     let ops = 0;
//     for (let k = 0; k < n; k++) {
//         ops += pos[k] - k;
//     }
//     return ops;
// }


// const input = [1 ,2, 3, 4, 5, 6]
// const n = 3
// // minOperationPerm(input,n);
// console.log(minOperationPerm(input, n));





function minOperations(P, N) {
  let pos = [];

  for (let i = 0; i < 2 * N; i++) {
    if (P[i] <= N) {
      pos.push(i);
    }
  }

  let ops = 0;

  for (let k = 0; k < N; k++) {
    ops += pos[k] - k;
  }

  return ops;
}

// const input = [1, 2, 3, 4, 5, 6];
const input = [6 ,5, 4, 3, 2, 1];

const n = 3;
// minOperationPerm(input,n);
console.log(minOperations(input, n));


// function minOperations(P, N) {
//   let ops = 0;
//   let k = 0; // target index

//   for (let i = 0; i < 2 * N; i++) {
//     if (P[i] <= N) {
//       ops += i - k;
//       k++;
//     }
//   }

//   return ops;
// }


