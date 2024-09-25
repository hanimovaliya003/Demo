// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// Function to display the cart items and total price
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Size: ${item.size} - $${item.price}`;
        cartItems.appendChild(li);
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Call the function to display cart when page loads
displayCart();

// Function to simulate checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(`Your total is $${totalPrice.toFixed(2)}. Proceeding to checkout...`);
    // Implement checkout functionality here
}
