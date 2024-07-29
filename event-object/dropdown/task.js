'use strict';

const itemLinks = [...document.querySelectorAll(".dropdown__link")];
const dropDownList = document.querySelector(".dropdown__list");
const dropDownValue = document.querySelector(".dropdown__value");


dropDownValue.addEventListener("click", () => {
    dropDownList.classList.toggle("dropdown__list_active");
})

itemLinks.forEach((item) => {
    item.addEventListener("click", function (event) {
        dropDownValue.textContent = item.textContent;
        dropDownList.classList.toggle("dropdown__list_active");
        event.preventDefault()
    })
})