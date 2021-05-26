// Ex1:#### 1. Viết hàm tạo một số tự nhiên ngẫu nhiên từ 0 đến n.

function rand(n) {
  return Math.floor(Math.random() * n);
}

// Ex2:. Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác.
// Ví dụ
// Chuyển giá trị 255 từ cơ số 10 sang 16
// convert(255, 10, 16); // “ff”

function convert(value, from, to) {
  let temp = parseInt(value, from);
  return temp.toString(to);
}

// Ex3: Viết hàm tạo một số nguyên ngẫu nhiên trong khoảng từ a -> b
// Ví dụ
// rand(10, 100); // 34
function rand(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

// BT ve String:

// #### 1. Viết hàm chuyển đổi một tên thành tên viết tắt.

function abbr(name) {
  let space = name.indexOf(" ");
  name = name.slice(0, space + 3);
  return name + ".";
}

// Ex2 Viết hàm ẩn địa chỉ email.

// ```js
// // Ví dụ
// hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”
// ```

function hide(email) {
  let an = email.indexOf("@");
  an = email.slice(an);

  let pre = email.slice(0, 2);
  return pre + "..." + an;
}
console.log(hide("kieuphuchuy@gmail.com"));

// BT ve  Datetime !!!!!!

// #### 1. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.
// ```js
// // Ví dụ
// dayOfWeek(date); // "T2"
// ```;

// 2. Viết hàm trả về ngày trước ngày hiện tại n ngày

// ```js
// // Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"

function getDateBefore(date, n) {
  date = new Date(date);
  let nowDate = date.getDate();
  return new Date(date.setDate(nowDate - n));
}

// getDateBefore("2002-04-04", 12);

// BT ve  Array !!!
a = [1, 3, 5, 4, 6, 8, 11, 21];

a.sort(function sortArray(a, b) {
  return a - b;
});

// function sort(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i;  j < arr.lenth; j++) {
//             if (a[i] > a[j]) {
//                 let temp = a[i];
//                 let a[i] = a[j];
//                 a[j] = temp;
//             }
//         }
//     }

// }

let arr = [
  { name: "Ba", age: 29 },
  { name: "Hanh", age: 30 },
  { name: "Ngoc", age: 22 },
  { name: "Hung", age: 37 },
  { name: "Hieu", age: 33 },
  { name: "Quang", age: 25 },
  { name: "Huy", age: 19 },
];

// phan foreach
// function f(item) {
//     console.log(item.name + ": " + item.age);
// }

// for (let i = 0; i < arr.length; i++) {
//     f(arr)
// }

arr.forEach(function (i) {
  console.log(i.name + ":" + i.age);
});

// let result = [];

// phan filter
arr.filter(function (i) {
  if (i.age > 25) {
    return true;
  } else {
    return false;
  }
});

// phan map:
// let newArray = [];

// for (let i of arr) {
//     newArray.push(i.age * 10)
// }

arr.map(function (i) {
  return i.age * 10;
});

// phan reduce:

// let sum = 0;
// for (let i of arr) {
//     sum += i.age;
// }

arr.reduce(function (sum, i) {
  sum += i.age;
  return sum;
}, 0);
