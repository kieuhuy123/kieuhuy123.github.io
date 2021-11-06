// alert("Minh la hdzzz");
// alert("I'm 19 years old")

// let myName = " Kiều Huy";
// let myAge = "19";
// let isHandsome = true;

// alert(myName);
// alert(myAge)

// let gretting = "Hi, I'm" + myName;
// alert(gretting);

// let isHandsome = true;

// let value;
// alert(value);

// let huy = {
//     myName: "Kiều Huy",
//     myAge: "19",
//     isHandsome: true,
// }

// alert(huy.myName);
// alert(huy["myAge"]);

// thuc hien 1 cong viec
// function gretting(name,job,age) {
//     alert("Hello I'm " + name + " and I'm "+ job + " nam nay minh "  + age +" tuoi " );
// }

// gretting("Huy","studen",19);
// gretting("Hieu","engineer",24);

// Tinh toan
// function add(a, b) {
//     let result = a + b;

//     return result
// }

// alert(add(1, 2));

// let myName = prompt("what's your name?")

// let answer = confirm("Do you love me no ?")

// console.log("Answe" + answer);

// let age = Number(prompt("Nhập số tuổi của bạn: "));

// let ageAfterTenYear = age + 10;

// console.log("Tuổi của bạn 10 năm sau là: " + ageAfterTenYear)

// Ex1
// let a = Number(prompt("nhập a: "))
// let b = Number(prompt("Nhập b: "))

// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// console.log(a + "+" + b + " = " + add(a, b));

// console.log(a + "-" + b + " = " + sub(a, b));

// console.log(a + "*" + b + " = " + mul(a, b));

// console.log(a + "/" + b + " = " + div(a, b));

// Ex2

// let a = Number(prompt("Nhập chiều dài:"));
// let b = Number(prompt("Nhập chiều rộng"));

// function chuVi(a, b) {
//   return (a + b) * 2;
// }
// function dienTich(a, b) {
//   return a * b;
// }

// console.log(
//   "chiều dài: " + a + ";" + "Chiều rộng " + b + ";" + "Chu vi là: " + chuVi(a, b)
// );
// console.log(
//   "chiều dài: " + a + ";" + " Chiều rộng: " + b + ";" + "Diện tích là: " + dienTich(a, b)
// );

// Ex3
// let r = Number(prompt("Nhập vảo bán kính: "));0

// function chuViO(r) {
//     return 2 * 3.14 * r;
// }
// function dienTichO(r) {
//     return 3.14*r ** 2;
// }
// console.log("ban kinh:" + r + ";" + "chu vi hình tròn :" + chuViO(r));
// console.log("ban kinh:" + r + ";" + "diện tích hình tròn :" + dienTichO(r));



// Home work

// Ex1
let a = Number(prompt("Nhập độ dài cm: "));

function mm (a) {
    return a * 10;
}
function m(a) {
  return a / 100;
}
function km(a) {
  return a / 10000;
}

console.log(a+"cm"+"="+ mm(a) + "mm");
console.log(a + "cm" + "=" + m(a) + "m");
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
// tinh ra gio
function Hours(s) {
    return (s - m(s)) / 3600;
}
// tinh ra phut
function M(s) {
    return (s - sec(s)) / 60;
}
function minute(s) {
    return M(s) % 60;
}

console.log(Hours(s)+":"+minute(s)+":"+sec(s))








