// let sum = (a, b, ...agrs) => {
//   let total = a + b;
//   for (i = 0; i < agrs.length; i++) {
//     total += agrs[i];
//   }
//   return total;
// };
// let arr = [1,5,6,7,2]
// console.log(sum(... arr))

function greating({ userName: a, userEmail: b }) {
  console.log(`Welcom ${a}`);
  console.log(`Email: ${b}`);
}
let user = {
  userName: "Huydzz",
  userEmail: "huy@...",
};

greating(user);

// Bai tap
let students = [
  {
    name: "Tú Anh",
    age: 21,
    email: "tuanh@techmaster.vn",
  },
  {
    name: "Chị Hạnh",
    age: 30,
    email: "hanh@techmaster.vn",
  },
  {
    name: "Quang",
    age: 24,
    email: "quang@techmaster.vn",
  },
  {
    name: "Cường",
    age: 25,
    email: "cuong@techmaster.vn",
  },
  {
    name: "Hoàng",
    age: 29,
    email: "hoang@techmaster.vn",
  },
  {
    name: "Ngọc",
    age: 27,
    email: "ngoc@techmaster.vn",
  },
  {
    name: "Huy",
    age: 19,
    email: "huy@techmaster.vn",
  },
];

// Viết hàm sử dụng cú pháp arrow function, destructuring assignment
// sắp xếp danh sách học viên theo tuổi


// students.sort((a, b) => a.age - b.age);

// console.log(students);

// let oldPerson = students.filter((i) => i.age >= 25);

// oldPerson.sort((a, b) => b.age - a.age);
// console.log(oldPerson);

// let oldPerson = students
//   .filter(({ age }) => age >= 25)
//   .sort(({ age: s1 }, { age: s2 }) => s2 - s1);

// console.log(oldPerson);

// let total = students.reduce((sum, { age }) => (sum += age), 0);

// console.log(total);


// tao them nut them hoc vien
let renderStudents = (students) =>
  students
    .map(
      ({ name, age, email }, i) =>
        `<tr>
      <th scope="row"> ${i + 1}</th>
      <td>${name}</td>
      <td>${age}</td>
      <td>${email}</td>
      
      <td>

        <button class = "btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="" >
          <i class="bi bi-pencil"></i>
        </button>
         <button  name="btn-dele"  class = "btn btn-outline-primary" onclick="deleteRow(this)">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `
    )
    .join("");
document.getElementById("tbody").innerHTML = renderStudents(students);

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.querySelector(".table").deleteRow(i);

}

// let btn = document.getElementsByName("btn-dele");

// btn.addEventListener("click", deleteRow(this));

// edit
// currentIndex = -1;
// var editFunc = (index) => {
//   currentIndex = index;
//   let studentEdit = students[index];
//   document.getElementById("nameStudent").value = studentEdit.name;
//   document.getElementById("ageStudent").value = studentEdit.age;
//   document.getElementById("emailStudent").value = studentEdit.email;
// };
// save changes
// var saveChanges = () => {
//   let thaydoi = currentIndex;
//   students[thaydoi].name = document.getElementById("nameStudent").value;
//   students[thaydoi].age = document.getElementById("ageStudent").value;
//   students[thaydoi].email = document.getElementById("emailStudent").value;
//   currentIndex = -1;
//   document.getElementById("tbody").innerHTML = renderStudents(students);
// };

// add students

let addInfo = () => {
  let newStu = {
    name: document.getElementById("addNameStudent").value,
    age: document.getElementById("addAgeStudent").value,
    email: document.getElementById("addEmailStudent").value,
  };
  students.push(newStu);
  document.getElementById("tbody").innerHTML = renderStudents(students);
};
