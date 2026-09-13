// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// =========================
// CART
// =========================

const cartBtn = document.querySelector(".cart-btn");
const cartPanel = document.querySelector(".cart-panel");
const closeCart = document.querySelector(".close-cart");

cartBtn.addEventListener("click", () => {
    cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("open");
});


// =========================
// PRODUCTS
// =========================

const addButtons = document.querySelectorAll(".add-cart");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total strong");

let cart = [];


// =========================
// ADD TO CART
// =========================

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".menu-card");

        const name = card.querySelector("h3").textContent;
        const priceText = card.querySelector("strong").textContent;

        const price = parseInt(
            priceText.replace(/[^0-9]/g, "")
        );

        const existingProduct = cart.find(
            item => item.name === name
        );

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        updateCart();

        cartPanel.classList.add("open");

    });

});


// =========================
// UPDATE CART
// =========================

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                سبد خرید شما خالی است.
            </p>
        `;

    } else {

        cart.forEach((item, index) => {

            const itemElement = document.createElement("div");

            itemElement.className = "cart-item";

            itemElement.innerHTML = `

                <div>
                    <h3>${item.name}</h3>

                    <p>
                        ${item.price.toLocaleString("fa-IR")} تومان
                    </p>
                </div>

                <div class="quantity">

                    <button onclick="changeQuantity(${index}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                </div>

            `;

            cartItems.appendChild(itemElement);

        });

    }


    // تعداد کل محصولات

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent =
        totalQuantity.toLocaleString("fa-IR");


    // قیمت کل

    const totalPrice = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );

    cartTotal.textContent =
        totalPrice.toLocaleString("fa-IR") + " تومان";

}


// =========================
// CHANGE QUANTITY
// =========================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

}


// =========================
// MENU CATEGORY
// =========================

const categories =
    document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

    });

});


// =========================
// DARK MODE BUTTON
// =========================

const themeBtn =
    document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});


// =========================
// START
// =========================

updateCart();
