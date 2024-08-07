"use strict";
const toolTips = Array.from(document.getElementsByClassName("has-tooltip"))

toolTips.forEach(hint => {

  hint.addEventListener("click",  (event) => {

            let activeToolTip = document.querySelector('.tooltip_active');

            if (hint.nextSibling.className != 'tooltip tooltip_active' || activeToolTip === null){
            let newToolTip = document.createElement('div');

            newToolTip.classList.add('tooltip');
            newToolTip.classList.add('tooltip_active');
            newToolTip.setAttribute('style', `left: ${Math.round(hint.getBoundingClientRect().left)}px; 
              top: ${Math.round(hint.getBoundingClientRect().bottom)}px`);
            newToolTip.textContent  = hint.getAttribute('title');

            hint.after(newToolTip);   
            }
            else {
              hint.nextSibling.remove();
            }
            event.preventDefault();
    })
})