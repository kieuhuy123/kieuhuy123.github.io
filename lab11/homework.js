// Ex 1

// for (let i = 1; i <= 10; i++){
//     let s="!"
//     for (let j = 1; j <= 10; j++){
//         s += i * j + " ";
//     }
//     console.log(s)

// }

// Ex2
// for (let i = 1; ; i++) {
//   a = Number(prompt("Nhap 1 so "));
//   if (a == null || a == "" || a > 50) {
//     break;
//     }
//     if (a % 3 == 0 && a % 5 == 0) {
//       console.log("FizzBuzz");
//     }
//      else if (a % 3 == 0) {
//         console.log("Fizz")
//     } else if (a % 5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log("BuzzFizz")
//     }

// }

// Ex3 : Tong boi chung
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     sum += i;
//   }
// }
// console.log("tong boi chung la: " + sum);

// Ex4: so nguyen to

// function isPrime(n) {
//     let isTrue = true;

//   if (n < 2) {
//     console.log("khong phai so nguyen to");
//   } else {
//       for (let i = 2; i <= n / 2; i++){
//            if (n % i == 0) {
//              isTrue = false;
//            }

//     }

//   }
//   if (isTrue) {
//     console.log(n + " so nguyen to");
//   } else {
//     console.log(n + " khong phai so nguyen to ");
//   }
// }
// isPrime(prompt("nhap mot so"))

// Ex4

//     let isTrue = true;

// let n = Number(prompt("nhap mot so: "));

// if (n < 2) {
//     console.log("khong phai so nguyen to");

// } else {
//      for (let i = 2; i <= n - 1; i++) {
//         if (n % i == 0) {
//             isTrue = false;
//         }
//     }
// }

// if (isTrue) {
//     console.log(n + " la so nguyen to")
// } else {
//     console.log(n + " khong phai so nguyen to")
// }

//  Ex 5: nhap 2 so a,b

// let a = Number(prompt("nhap so a"));

// let b = Number(prompt("nhap so b"));

// for (let i = a; i <= b; i++){
//     let isTrue = true;
//     if (i < 2) {
//         continue;
//     }
//     for (j = 2; j <=i/2; j++){
//         if (i % j == 0) {
//              isTrue = false;
//             break;
//         } 
         

//     }
//     if (isTrue) {
//         console.log(i)
//     }
    
   
// }
   
 

// Ex6:bang cuu chuong nguoc
// for (let i = 10; i >= 1; i--){
//         let s = "!";
//     for (let j = 10; j >= 1; j--){
//         s += i * j + " ";
//     }
//     console.log(s)
// }

// Ex1: in ra so dau va cuoi
// let n = Number(prompt("nhap mot so: "));

// Ex5:
// let n = Number(prompt("nhap vao mot so: "));

// let S = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//         S += i;
//     }
//     if (S == n) {
//         isTrue = true;

//     } else {
//         isTrue = false;
//     }

// }
// if (isTrue) {
//     console.log(n + " la so perfect")
// } else {
//     console.log(n +" khong phai so perfect")
// }

// Ex2:so Palindrome
// let n = Number(prompt("nhap mot so: "));

// let sum = 0;

// for (; n > 0; n=n/10){
//     r = n % 10;
//     sum = sum * 10 + r;

// }
// if (n == sum) {
//     console.log(n + " la so")
// } else {
//     console.log(n + "khong phai")
// }
