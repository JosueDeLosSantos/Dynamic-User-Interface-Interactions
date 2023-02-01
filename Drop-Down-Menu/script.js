import * as DOM from "./DOM.js";

const options = document.querySelector(".options");
const addOptions = document.querySelector(".add-options");
const liOptions = document.querySelectorAll("li");
const addOptionsJS = document.querySelector(".addOptionsJS");
const dropDownLabel = document.querySelector(".dropDownLabel");

addOptions.hidden = true;

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

const sampleArray = ["one", "two", "three"];

DOM.appendOptions(addOptionsJS, sampleArray);

const times = addOptionsJS.children.length;
const optionsArr = [];

for (let i = 0; i <= times - 1; i += 1) {
  optionsArr.push(addOptionsJS.children[i]);
}

optionsArr.forEach((el) =>
  el.addEventListener("click", show2, { capture: true })
);

// https://www.w3schools.com/howto/howto_js_media_queries.asp
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    addOptions.hidden = false;
    dropDownLabel.hidden = true;

    liOptions.forEach((el) =>
      el.addEventListener("click", show, { capture: true })
    );

    const optionsArr = [];

    for (let i = 0; i <= times - 1; i += 1) {
      optionsArr.push(addOptionsJS.children[i]);
    }

    optionsArr.forEach((el) =>
      el.addEventListener("click", show, { capture: true })
    );
  } else {
    addOptions.hidden = true;
  }
}

var x = window.matchMedia("(max-width: 400px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
