// Ex1
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));

// a == 0 && b == 0 && console.log("PT vo so nghiem");
// a == 0 && b != 0 && console.log("PT vo nghiem");

// let x = -b / a;
// a != 0 && console.log("Nghiem cua PT la x = " + x);

// Ex2
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));
// let c = Number(prompt("Nhap c"));

// max = a;
// b >= max && (max = b);
// c >= max && (max = c);

// console.log(max + " la so lon nhat");


// Ex 3
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));
// let c = Number(prompt("Nhap c"));

// a + b > c &&
//   a + c > b &&
//   b + c > a &&
//   console.log("3 canh tao thanh 1 tam giac "); 

// a + b <= c && console.log("3 canh khong tao thanh 1 tam giac ");
// a + c <= b && console.log("3 canh khong tao thanh 1 tam giac ");
// c + b <= a && console.log("3 canh khong tao thanh 1 tam giac ");






// Ex1
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));
// let c = Number(prompt("Nhap c"));

// if (a > b && a > c) {
//     console.log(a + " là số lớn nhất");
// } else if(b > a && b > c) {
//     console.log(b + " là số lớn nhất");
// } else {
//      console.log(c + " là số lớn nhất");
// }

// Ex2
// let year = Number(prompt("nhập số năm"));

// if (year % 4 == 0 && year % 100 !== 0) {
//     console.log(year + " là năm nhuận");
// } else {
//     console.log(year + " không phải năm nhuận");
// }

// Ex3
// let char = String(prompt("Nhập chữ cái: "));

// if (char == "a" || char == "e" || char == "o" || char == "u" || char == "i") {
//   console.log(char + " là nguyên âm");
// } else {
//   console.log(char + " là phụ âm");
// } 

// Ex4
// let char = String(prompt("Nhập chữ cái: "));

// if ( "@" < char && char <= "Z") {
//     console.log(char + " là chữ in hoa");
// } else if ("a" <= char && char <= "z"){
//      console.log(char + " là chữ in thường");
// } else {
//     console.log("nhập sai ký tự")
// }

// Ex5
// let a = Number(prompt("Nhập a"));
// let b = Number(prompt("Nhập b"));
// let c = Number(prompt("Nhập c"));


// let dt = b ** 2 - (4 * a * c)


// if (dt < 0) {
//     console.log("Phương trình vô nghiệm")
// } else if (dt == 0) {
//     let x = -b / (2 *a);
//     console.log("Nghiệm kép của pt là:" + x)
// } else  {
//     let x1 = (-b + Math.sqrt(dt)) / (2 * a);
//     let x2 = (-b - Math.sqrt(dt)) / (2 * a);
//     console.log("nghiệm của PT là:"+ "x1 = " + x1 + ";" + "x2 = " + x2)
// }

// Ex6
// let point = Number(prompt(" nhập điểm: "));

// if (0 < point && point < 4) {
//   console.log("đạt điểm: F");
// } else if (point < 5.5) {
//   console.log("đạt điểm: D");
// } else if (point < 7) {
//   console.log("đạt điểm: C");
// } else if (point < 8.5) {
//   console.log("đạt điểm: B");
// } else if (point <= 10) {
//   console.log("đạt điểm: A");
// } else {
//     console.log("điểm bạn thấp quá => bị đuổi học")
// }

