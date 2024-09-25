document.addEventListener("DOMContentLoaded", function () {
    // Initialize cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsElement = document.getElementById("cartItems");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const shippingCost = 5.00;

    // Function to update cart display
    function updateCartDisplay() {
        cartItemsElement.innerHTML = ''; // Clear the table body
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.quantity * item.price;
            subtotal += itemTotal;

            const cartRow = `
            <tr>
                <td>
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </td>
                <td>
                    <button class="btn btn-outline-secondary btn-sm" onclick="decreaseItemQuantity(${index})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="increaseItemQuantity(${index})">+</button>
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
                </td>
            </tr>
            `;
            cartItemsElement.insertAdjacentHTML('beforeend', cartRow);
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
    }

    // Increase item quantity
    window.increaseItemQuantity = function (index) {
        cart[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartDisplay();
    };

    // Decrease item quantity
    window.decreaseItemQuantity = function (index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            // Optionally remove the item if quantity is zero
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartDisplay();
    };

    // Remove item from cart
    window.removeItem = function (index) {
        cart.splice(index, 1); // Remove item from cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartDisplay();
    };

    // Initial cart display
    updateCartDisplay();

    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', function () {
        // Here, you can redirect the user to a payment/checkout page
        window.location.href = 'payment.html'; // Replace with your checkout page URL
    });
});
