function loader(arr) {
  let map = {};
  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
    console.log(key);
    console.log(map);
  }
  console.log(Object.values(map));
  //   return Object.values(map);
}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(loader(arr));
