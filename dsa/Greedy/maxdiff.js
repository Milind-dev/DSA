// https://chatgpt.com/c/69425a90-96ec-8327-9390-4201cd5b33dd


function maximumWeightDifference(wi,n,son) {
  let k = Math.min(son, n - son);
  let sortweight = wi.sort((b, a) => b - a);
  console.log("k", k);
  // console.log(sortweight)
  let totalsum = 0;
  let lightsum = 0;
  let heavysum = 0;
  for (let i = 0; i < sortweight.length; i++) {
    totalsum += sortweight[i];
  }
  for (let i = 0; i < k; i++) {
    lightsum += sortweight[i];
  }
  for (let i = n - k; i < wi.length; i++) {
    heavysum += sortweight[i];
  }
  console.log(totalsum, lightsum, heavysum);

  let diff1 = Math.abs(totalsum - totalsum - totalsum);
  let diff2 = Math.abs(totalsum - heavysum - heavysum);

  // console.log("heavysum = " ,n-k)
  // console.log("lightsum for i = 0 ; i<k = ",k)
  // console.log(totalsum)

  // Step 7: Return maximum difference
  return Math.max(diff1, diff2);
}

// const son = 6;
const son = 3;
// const wi = [8 ,4 ,5 ,2 ,10];
const wi = [1 ,1 ,1, 1, 1 ,1 ,1, 1];

const n = wi.length;
// maximumWeightDifference(wi, n, son);
console.log(maximumWeightDifference(wi, n, son));
