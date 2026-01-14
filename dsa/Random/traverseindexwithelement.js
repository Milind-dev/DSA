function loader(arr) {
  let strnum = arr.split("").map(Number);
  let count = 0;
  let i = 0;
  while (i < strnum.length) {
    if (i > 0 && strnum[i] > strnum[i - 1]) {
      i = i + strnum[i];
      count++;
    } else {
      i++;
    }
  }
  return count;
}

const arr = "123031";
console.log(loader(arr));
