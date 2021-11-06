let p = document.getElementById("p");

let img = document.createElement("img");

img.src =
  "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg";

let div = document.createElement("div");
div.classList.add("container");
div.textContent = ("Container");

// 
// document.body.before(div);
// document.body.after(img);

// // 
document.body.insertAdjacentHTML("afterbegin", "<h1> tieu de </h1>")
document.body.insertAdjacentText("afterbegin", "asdasd");


//




