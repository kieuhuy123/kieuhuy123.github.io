let arr = [1, 2, 3, 4];

let f = arr.find((p) => {
  if (p == 1) {
    console.log(p);
  }
});

let e = arr.map((p) => {
  return p * 3;
});

console.log(e);
