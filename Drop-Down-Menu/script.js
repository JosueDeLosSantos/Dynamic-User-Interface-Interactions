const options = document.querySelector(".options");
const addOptions = document.querySelector(".add-options");
const body = document.querySelector("nav");
const liOptions = document.querySelectorAll("li");

function show() {
  addOptions.hidden = false;
}
options.addEventListener("click", show, { capture: true });

function show2() {
  addOptions.hidden = true;
}

liOptions.forEach((el) =>
  el.addEventListener("click", show2, { capture: true })
);
