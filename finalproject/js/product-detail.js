// View all
document
  .querySelector("#view-all-description")
  .addEventListener("click", () => {
    let content = document.querySelector(".product-detail-content");

    content.classList.toggle("active");

    document.querySelector("#view-all-description").innerHTML =
      content.classList.contains("active") ? "view less" : "view all";
  });
