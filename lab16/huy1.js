// let p = document.getElementById("p");

// function demo() {
//     console.log("demo function")
// }

// p.onclick = function () {
//     demo();
// };
// p.onclick = demo;

let form = document.forms.converter;

let from = form.elements.from;
let to = form.elements.to;
let temp = form.elements.temp;
let ketqua = form.elements.ketqua
let btn = form.elements.btnConvert;

// 
function toCelcius(from, value) {
    if (from == "K") {
        return value - 273.15;

    } else if (from == "F") {
        return (value - 32) / 1.8;
    } else {
        return value;
    }
};




// 
function celciusTo(from, value) {
    if (from == "K") {
      return value + 273.15;
    } else if (from == "F") {
      return (value * 1.8 + 32)
    } else {
      return value;
    }

};



// btn.onclick = function () {
    
//     let nhapvao = toCelcius(from.value, Number(temp.value));
//     ketqua.value = celciusTo(to.value, nhapvao);
    
// };





function convert(event) {
    
    this.textContent = "sao sao "
    console.log(event)
    let c = toCelcius(from.value, Number(temp.value));
    ketqua.value = celciusTo(to.value, c);
}


function huy() {
    console.log("haha function");

}

btn.addEventListener("click", convert);
btn.addEventListener("click", huy);

// form.addEventListener("click", function () {
//     console.log("hdzz")
// })





// 