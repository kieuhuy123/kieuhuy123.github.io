let xhr = new XMLHttpRequest();

let method = "GET";
let uri = `https://reqres.in/api/users?page`;

xhr.open(method, uri);
xhr.responseType = "json";

xhr.onerror = () => console.log("Cannot send request");

// Render
xhr.onload = (e) => {
  const user = xhr.response.data;
  console.log(user);

  const html = user.map((u) => {
    console.log(u);
    return `<div class="col-3">
            <h4 class="user-name">${u.first_name + " " + u.last_name}</h4>
            <p class="user-email">${u.email}s</p>
            <img src="${u.avatar}" alt="" />
          </div>
        `;
  }).join("");
  document.querySelector(".user").innerHTML = html;
};

xhr.send(null);
