import ajax from "./ajax.js";
import { renderStudent, url } from "./render.js";
import validate, {
  form,
  firstname,
  lastname,
  email,
  phone,
} from "./validate.js";

let studentId = url.searchParams.get("studentId");
console.log(url);
console.log(studentId);
let student;

ajax({
  method: "GET",
  uri: "/students/" + studentId,
  body: null,
  onsuccess: ({ data }) => {
    student = data;
    renderStudent(data);
  },
});

document.getElementById("delete").addEventListener("click", (e) => {
  let isConfirm = confirm(`Co chac muon xoa ${document.title} ?`);

  if (isConfirm) {
    fetch("/students/" + studentId, { method: "DELETE" }).then(
      () => (window.location.href = `/`)
    );

    // ajax({
    //   method: "DELETE",
    //   uri: "/students/" + studentId,
    //   body: null,
    //   onsuccess: () => (window.location.href = `/`),
    // });
  }
});

// Modal cap nhat thong tin
const modal = document.getElementById("modal");

modal.addEventListener("show.bs.modal", (e) => {
  firstname.value = student.first_name;
  lastname.value = student.last_name;
  email.value = student.email;
  phone.value = student.phone;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = validate();

  if (data) {
    ajax({
      method: "PUT",
      uri: "/students/" + studentId,
      body: JSON.stringify(data),
      onsuccess: ({ data }) => {
        student = data;
        renderStudent(data);

        form.reset(); // xoa thong tin modal
        document.getElementById("close").click();
      },
    });
  }
});
