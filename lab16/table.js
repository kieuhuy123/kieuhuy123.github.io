// Cho mảng các object chứa các thông tin về học viên
let students = [
  {
    name: "Bùi Thanh Hà",
    age: 35,
    gender: "M",
  },
  {
    name: "Nguyễn Trường Giang",
    age: 27,
    gender: "M",
  },
  {
    name: "Phạm Minh Tuấn",
    age: 26,
    gender: "M",
  },
  {
    name: "Cung Bùi Tuấn Anh",
    age: 28,
    gender: "M",
  },
  {
    name: "Trịnh Bá Hưng",
    age: 27,
    gender: "M",
  },
  {
    name: "Đỗ Phương Thảo",
    age: 22,
    gender: "F",
  },
  {
    name: "Đặng Vũ Lam Mai",
    age: 22,
    gender: "F",
  },
  {
    name: "Đỗ Thanh Lam",
    age: 24,
    gender: "F",
  },
  {
    name: "Nguyễn Phương Hà",
    age: 25,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Tuệ Minh",
    age: 19,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Anh Minh",
    age: 18,
    gender: "M",
  },
];

/**1
 * Viết CT JavaScript tạo bảng danh sách học viên
 * Tạo các thành phần HTML sử dụng: document.createDocument()
 * Thêm bảng vào div#app
 */

// let div = document.getElementById("app");
// // let div = document.createElement("div");
// // div.id = "app";

// let tbl = document.createElement("table");
// tbl.id = "tbl"
// // tao thead
// let thead = document.createElement("thead");

// let th1 = document.createElement("th");
// th1.textContent = "Name";

// let th2 = document.createElement("th");
// th2.textContent = "Age";
// let th3 = document.createElement("th");
// th3.textContent = "Gendar";

// // tao tbody
// let tbody = document.createElement("tbody");

// // dung vong lap de nhap thong tin vao table
// for (let i = 0; i < students.length; i++) {
//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   td1.innerHTML = students[i].name;

//   let td2 = document.createElement("td");
//   td2.innerHTML = students[i].age;
//   let td3 = document.createElement("td");
//   td3.innerHTML = students[i].gender;

//   // them hover vao
//   tr.addEventListener

//   // dung appenChild de long cac the con
//   div.appendChild(tbl);

//   tbl.appendChild(thead);
//   tbl.appendChild(tbody);

//   thead.appendChild(th1);
//   thead.appendChild(th2);
//   thead.appendChild(th3);

//   tbody.appendChild(tr);
//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3);
// }

function createTable(students) {
  let table = document.createElement("table");

  table.innerHTML = `
  <thead>
    <tr>
      <td  onclick="sortBy(this)" data-sortby="name">Name</td>
      <td onclick = "sortBy(this)" data-sortby="age">Age</td>
      <td onclick = "sortBy(this)" data-sortby = "gendar">Gender</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  `;

  students.forEach(function (student) {
    table.tBodies[0].append(createRow(student));
  });
  return table;
}

function createRow(student) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${student.name}</td>
  <td>${student.age}</td>
  <td>${student.gender}</td>
  `;
  // them event: mouseover, mouseout
  tr.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });
  tr.addEventListener("mouseout", function () {
    this.classList.remove("hover");
  });

  return tr;
}

let app = document.getElementById("app");

function render() {
  app.innerHTML = "";
  let table = createTable(students);
  app.appendChild(table);
}
render();

/**2
 * Thêm event cho các hàng, highlight hàng khi di chuột qua
 * Sử dụng event: mouseover, mouseout, mousein, ...
 */

/**3
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm,
 * và icon hiển thị trạng thái tăng/giảm)
 */
let current = null;

function sortBy(el) {
  let prop = el.dataset.sortby;

  console.log(current);
  console.log(prop)

  if (!current || current != prop) {
    current = prop;

    students.sort(function (s1, s2) {
      if (prop == "name" || prop == "gendar") {
        if (s1[prop] >= s2[prop]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return s1[prop] - s2[prop];
      }
    });
  } else {
    students.reverse();
  }
  render();
}


/**4
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */
let form = document.forms.search;
let text = form.elements.text;
let btn = form.elements.btn;

text.addEventListener("input", function (ev) {
  ev.preventDefault();

  let searchText = text.value.trim();
  let trs = Array.from(document.querySelector("table").tBodies[0].rows);
  trs.forEach(function (tr) {
    let name = tr.cells[0].textContent;
    if (name.includes(searchText)) {
      tr.cells[0].innerHTML = name.replace(searchText, "<mark>" + searchText + "</mark>");

    } else {
      let name = tr.cells[0].textContent;
      tr.cells[0].innerHTML = name;
    }
   

  });

})



/**5
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */
