"use strict";
const tabLinks = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabLinks.forEach((element, index) => {
    element.addEventListener("click", () =>{
        deleteActiveStatus()
        tabLinks[index].classList.add("tab_active")
        tabContents[index].classList.add("tab__content_active")
    })    
})

function deleteActiveStatus(){
    tabLinks.forEach((element)=>{
        element.classList.remove("tab_active")
    })
    tabContents.forEach((element)=>{
        element.classList.remove("tab__content_active")
    })
}