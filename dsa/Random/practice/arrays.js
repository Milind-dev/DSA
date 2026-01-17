
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// const mul = mul(input)
console.log(mul(1)(2)(3));