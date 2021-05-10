// 1. Thay đổi title trang thành Họ tên
// let head = document.head.querySelector("title")
// head.textContent = "Họ tên"

document.title = "ho va ten"


// 2. Tách đoạn văn bản cho sẵn thành 2 (cắt chỗ từ 'nemo?'), đặt vào trong thẻ p

// dung indexOf va Arrayfrom()

let text = document.body.firstChild;

let saperator = text.textContent.indexOf("?");
let p1 = "<p>" + text.textContent.slice(0, saperator) + "</p>";

let p2 = "<p>" + text.textContent.slice(saperator + 1) + "</p>";

text.remove();


document.body.innerHTML = p1 + p2 + document.body.innerHTML;


// 3. Đếm xem có bao nhiêu từ có độ dài lớn hơn 8 ký tự, thêm mã HTML vào trang
// <p>Số từ có độ dài lớn hơn 8: ...</p>
// bên dưới 2 đoạn văn bản bên trên

p1Element = document.body.firstElementChild;
p2Element = p1Element.nextElementSibling;

p1Text = p1Element.textContent.trim();
p2Text = p2Element.textContent.trim();

p1Text = p1Text.replaceAll(",", "")
p1Text = p1Text.replaceAll(".", "");
p1Text = p1Text.replaceAll("?", "");
p1Text = p1Text.replaceAll("\n", "");


let total = 0;

let str = p1Text.split(" ").filter(function (word) {
    return word.length > 8;
})

p2Text = p2Text.replaceAll(",", "");
p2Text = p2Text.replaceAll(".", "");
p2Text = p2Text.replaceAll("?", "");
p2Text = p2Text.replaceAll("\n", "");

str = str.concat(p2Text.split(" ").filter(function (word) {
  return word.length > 8
}));

let result = "<p>So ky tu lon hon 8: " + str.length + "</p>" 

p1Element.remove();
p2Element.remove();

document.body.innerHTML = p1 + p2 + result + document.body.innerHTML;



// 4. Highlight các từ đó, sử dụng thẻ <mark> hoặc thẻ <span class...>
p1 = document.body.firstElementChild;
p2 = p1.nextElementSibling;

str.forEach(function (word) {
    p1.innerHTML = p1.innerHTML.replaceAll(word, "<mark>" + word + "</mark>");
    p2.innerHTML = p2.innerHTML.replaceAll(word, "<mark>" + word + "</mark>");
})


// 5. Thay thế nội dung các từ đó thành 'Thầy Ba đẹp trai 🧡'

Array.from(p1.children).forEach(function (el) {
    el.textContent = "Thay ba dep trai <3"
});

Array.from(p2.children).forEach(function (el) {
  el.textContent = "Thay ba dep trai <3";
});


// 6. Thêm src và alt cho thẻ img, sử dụng link ảnh bất kỳ
let img = document.getElementsByTagName("img")[0];

img.src =
  "https://i.pinimg.com/564x/df/ae/d9/dfaed90625ef84c541b9b0007885b614.jpg";
img.alt = " hdzz";
img.title = "boy"