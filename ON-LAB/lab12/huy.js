// let myComputer = {
//     type: "latop",
//     brand: "lenovo",
//     series: "legion5",
//     size: 15.6,
//     start: function () {
//         console.log("startup");
//     },
// };
// console.log(myComputer)

// myComputer.cpu = "ryzen5-4600h";
// myComputer.ram = "16gb";

// delete myComputer.series;

// console.log(myComputer);

// myComputer.brand = "Dell";
// myComputer.cpu = "i5-9300h"

// myComputer.start()

// myComputer.mouse = {
//     brand: "laptop88",
//     price: 1200,
// }
// console.log(myComputer);

// for (let k in myComputer) {
//     console.log(k)
// }
// console.log(myComputer.mouse.price)

// let o = {
//     name: "huy",
// };

// let c = o;
// c.name = "dep trai";

// let salaries = {
//   anna: 1000,

//   john: 1200,
//   phoebe: 2000,
//   brian: 1500,
//   diana: 1100,
// };

// Ex: viet 1 ham input(obj), tham so obj nhan vao la salaries, cho phep nguoi dung nhap ten nhan vien va luong

// let salaries = {};

// function input(obj) {
//     for (; ;){
//         let name = prompt("Ten nhan vien");
//         let salary = prompt("luong cua " + name);

//         if (name == null || salary == null || name == ""|| salary=="") {
//             break;

//         } else {
//             obj[name] = Number(salary);
//         }
//     }

// }

// input(salaries);
// console.log(salaries)

// Ex 2: viet ham Edit(obj)

// function edit(obj) {
//   for (;;) {
//     let name = prompt("Ten nhan vien");
//     let salary = prompt("luong cua " + name);

//     if (name == null || salary == null || name == "" || salary == "") {
//       break;
//     } else if (name in obj) {
//       obj[name] = Number(salary);
//     }
//   }
// }

// edit(salaries);
// console.log(salaries);

// Ex: viet ham minmax (obj), tham so nhan vao la salaries

// function minmax(obj) {
//   let max = 0;
//   let min = Infinity;
//   let maxName, minName;
//     let result = {};

//     for (let a in obj) {
//         if (obj[a] > max) {
//             max = obj[a];
//             maxName = a;
//         }
//         if (obj[a] < min) {
//             min = obj[a];
//             minName = a;
//         }
//     }
//     result[maxName] = max;
//     result[minName] = min;
//     return result;

// }
// minmax(salaries);

// Ex: Tinh tong luong cua nhan vien

// function total(obj) {
//   let sum = 0;
//   for (let k in obj) {
//     sum += obj[k];
//   }
//   return sum;
// }
// total(salaries);

// Ex: Tính tiền lương trung bình của toàn nhân viên,

// function avg(obj) {
//   let sum = 0;

//   let count = 0;
//   for (let k in obj) {
//     sum += obj[k];
//     count++
//   }
//   return avg = sum / count;

// }
// avg(salaries);
