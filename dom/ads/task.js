"use strict";

function rotator(startElement) {
    
  let nextRotatorElement = startElement.nextElementSibling;
  let elementColor = startElement.dataset.color;
  let elementSpeed = startElement.dataset.speed;
  let allP = document.getElementsByTagName('p');
  
  nextRotatorElement === null ? nextRotatorElement = document.querySelector(".rotator__case") : 
    nextRotatorElement = nextRotatorElement

  startElement.style.color = elementColor;
  allP[0].style.color = elementColor;
  
  displayText(elementSpeed, startElement, nextRotatorElement)
}

function displayText(delay, currentElem, nextElem) {
  setTimeout(() => {

    nextElem.classList.add("rotator__case_active");
    currentElem.classList.remove("rotator__case_active");
      
    rotator(nextElem);

  }, delay);
}

window.document.addEventListener('DOMContentLoaded', rotator(document.querySelector(".rotator__case_active")));