"use strict";
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("load", () => {
  const loaderActive = document.querySelector(".loader_active");
  loaderActive.classList.remove("loader_active");
  const items = document.getElementById("items");
  const request = xhr.response;
  const requestValute = request.response.Valute;
  for (const valute in requestValute) {
    const currentValute = createItems(requestValute[valute].CharCode, requestValute[valute].Value);
    items.appendChild(currentValute);
  }
});

function createItems(valuteCode, valuteValue) {
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  const itemCode = document.createElement("div");
  itemCode.setAttribute("class", "item__code");
  itemCode.textContent = valuteCode;
  const itemValue = document.createElement("div");
  itemValue.setAttribute("class", "item__value");
  itemValue.textContent = valuteValue;
  const itemCurrency = document.createElement("div");
  itemCurrency.setAttribute("class", "item__currency");
  itemCurrency.textContent = "руб.";
  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurrency);
  return item;
}