"use strict";

const cookieImage = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookieImage.addEventListener("click", () => {
  let clicks = clickerCounter.textContent++;
  clicks % 2 === 0 ? cookieImage.width = 300 : cookieImage.width = 200;
})