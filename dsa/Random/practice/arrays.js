//min and max here not adjacent , just min and max replace because element inside so its reset every time and min and max are store globally

function loader(array) {
  let min = array[0];
  let max = array[0];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > min) {
      min = element;
    } else {
      max = element;
    }
  }
  return { min, max };
}

console.log(loader([1, 2, 0, 1, 3, 0]));
// { min: 0, max: 3 }
