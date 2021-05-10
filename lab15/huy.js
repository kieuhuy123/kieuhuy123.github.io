let div = document.body.firstElementChild.nextElementSibling.nextElementSibling;

setInterval(function () {
  let date = new Date().toTimeString();
  let time = date.slice(0, 8) ;
  div.textContent = "Bay gio la: " + time ;
}, 1000);

let childs = document.body.children;

childs = Array.from(childs);

childs.forEach(function (el) {
    if (el.tagName === "H1") {
        el.textContent = "hdzz"
    }
    
})

// Tao mot bang, su dung JS de thay doi mau cho cac o theo duong cheo trong bang (su dung td.style.backgroundColor = "red" de doi mau nen)

// let table = document.body.firstElementChild;
// let tbody = table.firstElementChild;

//su dung getElementById
// let tbody = document.getElementById("tbody")
// let trs = Array.from(tbody.rows);
// 
// su dung getElementsByTagName
let tbody = document.getElementsByTagName("tbody");
let trs = Array.from(document.getElementsByTagName("tr"))


trs.forEach(function (tr) {
  let tds = Array.from(tr.cells);

  tds.forEach(function (td) {
    if (tr.rowIndex == td.cellIndex) {
      td.style.backgroundColor = "red"
    }
  });
});

// su dung quertSelector
document.querySelector("tr:last-child th:first-child").style.backgroundColor = "pink"




// 
let demo = document.querySelector("#demo");

demo.innerHTML = "<p>Paragraph<p/> ";


