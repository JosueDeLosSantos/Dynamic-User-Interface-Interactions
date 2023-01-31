import * as DOM from "./DOM.js";

const options = document.querySelector(".options");
const addOptions = document.querySelector(".add-options");
const addOptionsLi = document.querySelectorAll(".addOptionsLi");
const body = document.querySelector("nav");
const liOptions = document.querySelectorAll("li");
const addOptionsJS = document.querySelector(".addOptionsJS");

function show() {
  addOptions.hidden = false;
}
options.addEventListener("click", show, { capture: true });

function show2() {
  addOptions.hidden = true;
}

const sampleArray = ["one", "two", "three"];

DOM.appendOption(addOptionsJS, sampleArray);

liOptions.forEach((el) =>
  el.addEventListener("click", show2, { capture: true })
);
