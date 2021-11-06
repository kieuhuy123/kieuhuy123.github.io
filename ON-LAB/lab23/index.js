// hi();
// function hi() {
//   console.log("hdzzz");
// }

// (function (a, b) {
//   console.log(a+b)
// })(5, 6);

let x = 1;

function f() {
  let _y = 10;

  return {
    up: function () {
      _y++;
      return _y;
    },
    down: function () {
      _y--;
      return _y;
    },
    setY: function (value) {
      _y = value;
    },
  };
}

let abc = f();

console.log(abc.down());
console.log(abc.up());
console.log(abc.up());
abc.setY(100);
console.log(abc.up());
