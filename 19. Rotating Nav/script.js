const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");
const container = document.querySelector(".container");

closeButton.addEventListener("click", () => container.classList.remove("show-nav"));
openButton.addEventListener("click", () => container.classList.add("show-nav"));
