"use strict";

const book = document.querySelector(".book");
const controlFontSize = document.querySelector(".book__control_font-size");
const fontSizeList = document.querySelectorAll(".font-size");

fontSizeList.forEach((element) => {
  element.addEventListener("click", (event) => {
      book.classList.remove(`book_fs-${controlFontSize.querySelector(".font-size_active").dataset.size}`);
      controlFontSize.querySelector(".font-size_active").classList.remove("font-size_active");        

      element.classList.add("font-size_active");
      if (element.classList.contains("font-size_small")){
        book.classList.add(`book_fs-${element.dataset.size}`);
      } 
      else if (element.classList.contains("font-size_big")){
        book.classList.add(`book_fs-${element.dataset.size}`);
      } 
      else {
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
      }

      event.preventDefault();
  });
})
