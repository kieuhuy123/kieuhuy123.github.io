/*=== CHANGE BACKGROUND HEADER ===*/
function scrollHeader() {
  const header = document.getElementById("header");

  //   When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=== SERVICES MODAL ===*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");
console.log(modalBtns);
let modal = (modalCLick) => {
  modalViews[modalCLick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
/*===  ===*/

/*===  ===*/
