"use strict";

let countTime = setInterval(() => {
  let timer = document.getElementById("timer");
  timer.textContent -=1;
  if (timer.textContent <= 0) {
    clearInterval(countTime);
    alert("Вы победили в конкурсе");
  }
}, 1000);
