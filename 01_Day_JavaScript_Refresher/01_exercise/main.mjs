import webTechs from "./web_techs.mjs";

// console.log(webTechs);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

var newText = "";
for (let i in text) {
  if (text[i] !== "," && text[i] !== ".") {
    newText = newText + text[i];
  }
}

// console.log(newText);
const words = newText.split(" ");

console.log(words);
console.log(words.length);
