import pagination from "./pagination.js";

let url = new URL(window.location.href);
//pagination
let studentPerPage = Number(url.searchParams.get("_limit")) || 5;
let page = Number(url.searchParams.get("_page")) || 1;

//data
const tbody = document.querySelector(".data");
const nav = document.querySelector(".nav");

export { studentPerPage, page, url };

// export cho trang index
export default function ({ link, total, data }) {
  let html = data
    .map((s) => {
      return `
         <tr>
                <th scope="col">${s.id}</th>
                <td>${s.first_name}</td>
                <td>${s.last_name}</td>
                <td>
                    <a href="mailto:${s.email}">
                ${s.email}
                    </a>
                </td>
                <td>
                    <a href="tel:${s.phone}">
                ${s.phone}
                    </a>
                </td>
                <td>
                  <a href="student.html?studentId=${s.id}" class="btn"
                    ><i class="bi bi-info-circle"></i
                  ></a>
                </td>
              </tr>

        `;
    })
    .join("");

  tbody.innerHTML = html;

  // render pagination
  if (link) {
    let totalPage = Math.ceil(total / studentPerPage);
    let pg = pagination(link, page, totalPage);
    nav.innerHTML = pg;
  } else {
    nav.innerHTML = "";
  }
}

// export cho student
export function renderStudent({ first_name, last_name, email, phone }) {
  let html = `
              <p>Ho: ${last_name}</p>
              <p>Ten: ${first_name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
                 
    `;
  document.title = first_name + " " + last_name;
  document.getElementById("info").innerHTML = html;
}
