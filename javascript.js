let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartItemsElement.appendChild(li);

        total += 10; // assume all products cost $10
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}.00`;
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}
