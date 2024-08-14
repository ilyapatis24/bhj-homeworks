"use strict";

const inputText = document.getElementById("editor");

document.addEventListener("keyup", () => {
  localStorage.setItem("messageText", inputText.value);
});

window.addEventListener("load", () => {
  inputText.value = localStorage.getItem("messageText");
});