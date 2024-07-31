"use strict";


const hiddenElements = document.querySelectorAll(".reveal");

window.addEventListener('scroll', () => {

    hiddenElements.forEach((element) => {
        (isVisible(element) === true) ?
        element.classList.add("reveal_active") :
        element.classList.remove("reveal_active")
    });
})

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if ((bottom < 0) || (top > window.innerHeight)) {
        return false;
    }
    else {
        return true;
    }
}