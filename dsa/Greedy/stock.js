function loader(arr, n) {
  //   const price = arr
  const price = [...arr];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const p = price[i];
    console.log(p);
    if (price[i] > price[i - 1]) {
      //stored
      sum += price[i] - price[i - 1];
    }
  }
  console.log("sum", sum);
  return sum;
}
const n = 7;
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(loader(arr, n));
// https://www.naukri.com/code360/problems/selling-stock_630282?cvId=30d9a124324b41758081890466fd4535&campaign=dashboard_interviews&medium=desktop&source=naukri