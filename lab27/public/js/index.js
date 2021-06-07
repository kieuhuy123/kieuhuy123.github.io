// ajax(method, uri, null, (header, data) => {
//   let html = data
//     .map((s) => {
//       return `
//          <tr>
//                 <th scope="row">${s.id}</th>
//                 <td>${s.first_name}</td>
//                 <td>${s.last_name}</td>
//                 <td>
//                     <a href="mailto:${s.email}">
//                 ${s.email}
//                     </a>
//                 </td>
//                 <td>
//                     <a href="tel:${s.phone}">
//                 ${s.phone}
//                     </a>
//                 </td>
//                 <td>
//                   <a href="student.html?studentId=${s.id}" class="btn"
//                     ><i class="bi bi-info-circle"></i
//                   ></a>
//                 </td>
//               </tr>

//         `;
//     })
//     .join("");
//   tbody.innerHTML = html;
// });

import validate, { form } from "./validate.js";
import render, { studentPerPage, page } from "./render.js";
import ajax from "./ajax.js";
// import parseLink from "./utils.js";

// render
// fetch(`/students?_page=${page}&_limit=${studentPerPage}`).then((res) => {
//   let link = parseLink(res.headers.get("link"));
//   let total = res.headers.get("x-total-count");
//   res.json().then((json) => render({ link, total, data: json }));
// });
ajax({
  method: "GET",
  uri: `/students?_page=${page}&_limit=${studentPerPage}`,
  body: null,
  onsuccess: render,
});
//

form.addEventListener("submit", (e) => {
  console.log(form);
  e.preventDefault();

  let data = validate();

  if (data) {
    ajax({
      method: "POST",
      uri: "/students",
      body: JSON.stringify(data),
      onsuccess: () => {
        ajax({
          method: "GET",
          uri: `/students?_page=${page}&_limit=${studentPerPage}`,
          body: null,
          //Render body
          onsuccess: render,
        });
        form.reset(); // xoa thong tin modal
        document.getElementById("close").click();
      },
    });
  }
});

document.forms.searchStudent.addEventListener("submit", function (e) {
  e.preventDefault();

  let search = this.elements.search;

  if (search.value.trim() != "") {
    ajax({
      method: "GET",
      uri: `/students?_page=1&_limit=${studentPerPage}&q=${search.value.trim()}`,
      body: null,
      onsuccess: render,
    });
  }
});
