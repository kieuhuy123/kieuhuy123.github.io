// a = true, b = false, c = f || 0 = 0;

// .a && b && c= f
// .a || b|| c=  t
// .true
// .false
// .0

// let n = Number(prompt("Nhap so n:"));

// function soChan(n) {
//     let chan = n % 2 == 0;
//     return chan
// }

// n % 2 == 0 && console.log(n + " la so chan")
// n % 2 !== 0 && console.log(n + "la so le")

// Ex1
// let a = Number(prompt("Nhap so a: "));

// if (a % 2 == 0) {
//     console.log(a + " la so chan")
// } else {
//     console.log(a + " la so le")
// }

// Ex2
// let a = Number(prompt("Nhap so a: "));
// let b = Number(prompt("Nhap so b: "));

// if (a > b) {
//     console.log( a + "> "+ b )
// } else {
//     console.log (b + ">" + a)
// }

// Ex3

// let m = Number(prompt("Nhap thang"));

// if (0 < m && m <= 3) {
//   console.log("thang " + m + " la mua xuan");
// } else if ( m <= 6) {
//   console.log("thang " + m + " la mua ha");
// } else if (m  <= 9) {
//   console.log("thang " + m + " la mua thu");
// } else if ( m <= 12) {
//   console.log("thang " + m + " la mua dong");
// } else {
//   console.log("ban da nhap sai");
// }

// Ex4
// let a = Number(prompt("Nhap so a"));

// if (a % 5 == 0 && a % 11 == 0) {
//     console.log(a + " chia het cho 5 va 11")
// } else {
//     console.log(a + " khong chia het cho ca 5 va 11")
// }

// Ex4
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));

// a == 0 && b == 0 && console.log("PT vo so nghiem");
// a == 0 && b != 0 && console.log("PT vo nghiem");

// let x = -b / a;
// a != 0 && console.log("Nghiem cua PT la x = " + x);

// Ex5
// let a = Number(prompt("Nhap a"));
// let b = Number(prompt("Nhap b"));
// let c = Number(prompt("Nhap c"));

// a > b && a > c&& console.log("so lon nhat la: " + a);
// b > a && b > c && console.log("so lon nhat la: " + b);
// c > a && c > b && console.log("so lon nhat la: " + c);

// Ex 6
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
