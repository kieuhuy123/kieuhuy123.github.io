// BT ve Datetime !!!1

// \#### 1. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.

// ```js
// // Ví dụ
// dayOfWeek(date); // "T2"
// ```
function dayOfWeek(date) {
  let h = new Date();
}

// #### 2. Viết hàm trả về ngày trước ngày hiện tại n ngày

// ```js
// // Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"
// ```

// #### 3. Viết hàm trả về số ngày trong tháng bất kỳ

// ```js
// // Ví dụ
// daysOfMonth(year, month); // 31
// ```

//  Homework !!!

// #### 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

// ```

// Ví dụ
// avg([1, 2, 3]); // 2.0
// ```
// let arr = [1, 21,  3, 7, 8, 19, ];

// function avg(number) {
//     let sum = 0;
//     let count = 0;

//     for (let k of number) {
//         sum += k
//         count++
//     }
//     return sum / count;
// }
// avg(arr)

// #### 2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng

// ```js
// // Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}
// ```

// function maxOfArr(number) {
//     let max = 0;
//     let index;
//     let result = {};

//     for (let a of number) {

//         if (number[a] > max) {
//             max = number[a];
//             index = a;
//         }
//     }
//     result[index] = max;
//     return result;

// }
// maxOfArr(arr)

// #### 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng

// ```js
// // Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3
// ```
// function secondValue(arr) {
//   let max = arr[0];
//   let second;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       second = max;
//       max = arr[i];
//     }
//   }
//   return second;
// }

function secondValue(arr) {
  arr.sort(function secondValue(a, b) {
    return b - a;
  });
  let max = arr[0];
  for (let i of arr) {
    if (i < max) {
      return i;
    }
  }
}



// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap("hello world"); // "Hello World"
// ```

function toCap(word) {
  let result = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return result;
};


function cap(str) {
  let arrOfString = str.split(" ");
  let temp = arrOfString.map(function (word) {
    return toCap(word);
  });
  return temp.join(" ");
}

// #### 5. Viết hàm tìm số phần tử xuất hiện nhiều lần nhất trong mảng

// ```js
// // Ví dụ
// most([1, 2, 3]); // 2.0
// ```

// #### 6. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định.

// ```js
// // Ví dụ
// slide("Hello", 2); // ["He", "ll", "o"]
// ```



// #### 7. Viết hàm tách chuỗi thành một mảng các chuỗi con

// ```js
// // Ví dụ
// breakWord("dog"); // ["d", "do", "dog", "og", "g"]
// ```

function breakWord(str) {
    for (let i = 0; i <str.length; i++) {
        for (let j = i + 1; j < str.length; j++)
        {
            result.push(str.slice(i, j))
        }
    }
    return result;
}

// #### 8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

function removeFalsy(arr) {
    return arr.filter(Boolean);
}



// #### 9. Viết hàm lấy một phần tử ngẫu nhiên trong mảng

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

// #### 10. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)

// ```js
// // Ví dụ
// shuffle([1, 2, 3, 4]); // [1, 3, 4, 2]
// ```

function shuffle(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);

    let teamp = arr[randomIndex];
    arr[randomIndex] = arr[randomIndex2];
    arr[randomIndex2] = teamp;
    return arr;

}
