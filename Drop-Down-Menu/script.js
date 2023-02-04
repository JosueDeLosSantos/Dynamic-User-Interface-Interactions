import * as DOM from "./DOM.js";

const addOptions = document.querySelector(".add-options");
const addOptionsJS = document.querySelector(".addOptionsJS");
const dropDownLabel = document.querySelector(".dropDownLabel");

function toggler() {
  addOptions.classList.toggle("start");
  console.log("yes");
}
dropDownLabel.addEventListener("click", toggler);

const sampleArray = ["one", "two", "three"];

DOM.appendOptions(addOptionsJS, sampleArray);

const times = addOptionsJS.children.length;
const optionsArr = [];

for (let i = 0; i <= times - 1; i += 1) {
  optionsArr.push(addOptionsJS.children[i]);
}

// https://www.w3schools.com/howto/howto_js_media_queries.asp
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    addOptions.classList.remove("start");
    dropDownLabel.hidden = true;

    const optionsArr = [];

    for (let i = 0; i <= times - 1; i += 1) {
      optionsArr.push(addOptionsJS.children[i]);
    }
  } else {
    addOptions.classList.add("start");
    dropDownLabel.hidden = false;
  }
}

var x = window.matchMedia("(max-width: 400px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
