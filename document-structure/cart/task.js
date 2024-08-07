"use strict";
const addProductButton = document.querySelectorAll(".product__add")
const productQuantity = document.querySelectorAll(".product__quantity-control")
const productCarts = document.querySelector(".cart__products")

productQuantity.forEach(function(product) {

  product.addEventListener("click", () => {
        
        let productSum = product.parentElement.getElementsByClassName("product__quantity-value")[0]

            if (product.classList.contains("product__quantity-control_dec")) {
                productSum.innerText = Number(productSum.innerText) - 1;
            }
            if (product.classList.contains("product__quantity-control_inc")) {
                productSum.innerText = Number(productSum.innerText) + 1;
            }
            if (productSum.innerText < 1) {
                productSum.innerText = 1;
            }
    })
})


addProductButton.forEach(btn => {

  btn.addEventListener("click", () => {

        let productId = btn.closest(".product").dataset.id
        let productImg = btn.closest(".product").querySelector(".product__image").getAttribute('src')
        let productSum = btn.parentElement.getElementsByClassName("product__quantity-value")[0].innerText

        let targetCart = Array.from(document.querySelectorAll(".cart__product")).find(cart => cart.dataset.id === productId)

        if (targetCart) {
            
            let productSumInCart = targetCart.querySelector(".cart__product-count")
                productSumInCart.innerText = Number(productSumInCart.innerText) + Number(productSum);

        } 
        else {
            let newProduct = document.createElement("div")
            newProduct.classList.add("cart__product")
            newProduct.innerHTML = `<div class="cart__product" data-id=${productId}>
                                    <img class="cart__product-image" src=${productImg}>
                                    <div class="cart__product-count">${productSum}</div>
                                    </div>`
                                
            document.querySelector(".cart__products").prepend(newProduct)
        }
    })
})