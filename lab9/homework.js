// Home work

// Ex1
let a = Number(prompt("Nhập độ dài cm: "));

function mm(a) {
  return a * 10;
}
function met(a) {
  return a / 100;
}
function km(a) {
  return a / 10000;
}

console.log(a + "cm" + "=" + mm(a) + "mm");
console.log(a + "cm" + "=" + met(a) + "m");
console.log(a + "cm" + "=" + km(a) + "km");

// Ex2
let c = Number(prompt("Nhập vào độ C: "));

function doF(c) {
  return c * 1.8 + 32;
}
function doK(c) {
  return c + 273.15;
}

console.log(c + "℃" + "=" + doF(c) + "℉");

console.log(c + "℃" + "=" + doK(c) + "K");

// Ex3

let s = Number(prompt("Nhập vào số giây: "));
// tinh ra giay

function m(s) {
  return s % 3600;
}

function sec(s) {
  return m(s) % 60;
}

// tinh ra phut
function M(s) {
  return (s - sec(s)) / 60;
}
function minute(s) {
  return M(s) % 60;
}
// tinh ra gio
function H(s) {
  return (s - m(s)) / 3600;
}




console.log(H(s) + ":" + minute(s) + ":" + sec(s));







// function h(s) {
//   return s % 86400;
// }
// function Hours(s) {
//   return H(s) % 24;
// }

// // tinh ra ngay
// function D(s) {
//     return (s - h(s)) / 86400;
// }
// console.log(D(s))