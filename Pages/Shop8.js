// =================second collection===================


function changeImage(color, imageId) {
    
    const images = {
        black: "Images/shop16.jpg", 
        green: "Images/shop17.jpg",
        red: "Images/shop18.jpg",
        white: "Images/shop19.jpg",
    };

    const imageElement = document.getElementById(imageId);

    
    if (images[color]) {
        imageElement.src = images[color];
    } else {
        console.error('Image not found for color:shop16.jpg ' + black);
    }
}

function changeMainImage(imageSrc) {
    
    document.getElementById('productImage2').src = imageSrc;

    
    document.getElementById('zoomContainer').style.backgroundImage = 'url(' + imageSrc + ')';
}

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY;
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

function changeImage(color, imgId, zoomContainerId) {
    var imageElement = document.getElementById(imgId);
    var zoomContainer = document.getElementById(zoomContainerId);

    switch (color) {
        case 'black':
            imageElement.src = 'Images/shop16.jpg'; 
            zoomContainer.style.backgroundImage = "url('Images/shop16.jpg')";
            break;
        case 'green':
            imageElement.src = 'Images/shop17.jpg'; 
            zoomContainer.style.backgroundImage = "url('Images/shop17.jpg')";
            break;
        case 'red':
            imageElement.src = 'Images/shop18.jpg'; 
            zoomContainer.style.backgroundImage = "url('Images/shop18.jpg')";
            break;
        case 'white':
            imageElement.src = 'Images/shop16.jpg'; 
            zoomContainer.style.backgroundImage = "url('Images/shop16.jpg')";
            break;
        default:
            imageElement.src = 'Images/shop16.jpg'; 
            zoomContainer.style.backgroundImage = "url('Images/shop16.jpg')";
    }
}


  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabContainer = button.parentElement.parentElement;
        const tabContentId = button.getAttribute('data-tab');

        tabContainer.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        tabContainer.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        button.classList.add('active');
        tabContainer.querySelector(`#${tabContentId}`).classList.add('active');
    });
});




const stars = document.querySelectorAll('.star-rating i');
    
stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        resetStars();
        this.classList.add('hovered');
        let prevStar = this.previousElementSibling;
        while (prevStar) {
            prevStar.classList.add('hovered');
            prevStar = prevStar.previousElementSibling;
        }
    });

    star.addEventListener('mouseout', function() {
        resetStars();
        setRating();
    });

    star.addEventListener('click', function() {
        resetStars();
        this.classList.add('selected');
        let prevStar = this.previousElementSibling;
        while (prevStar) {
            prevStar.classList.add('selected');
            prevStar = prevStar.previousElementSibling;
        }
    });
});

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('hovered');
        star.classList.remove('selected');
    });
}

function setRating() {
    const selected = document.querySelectorAll('.star-rating i.selected');
    selected.forEach(star => {
        star.classList.add('selected');
    });
}



// var modal = document.getElementById("imageModal");
// var img = document.querySelector("image/white.jpg");
// var modalImg = document.getElementById("modalImg");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }



let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}



setInterval(showNextSlide, 3000);                             
window.addEventListener('scroll', function() {
    var details = document.querySelector('.details-section');
    var position = details.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        details.classList.add('visible');
    }
});















document.addEventListener("DOMContentLoaded", function () {
    // Initialize an empty cart or load from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartButton = document.getElementById("cartButton");
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const cartCountElement = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const quantityInput = document.getElementById("quantityInput");

    // Display cart count on page load
    cartCountElement.textContent = cartCount;

    // Increase/Decrease quantity logic for adding product
    document.getElementById("increaseQty").addEventListener("click", function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    document.getElementById("decreaseQty").addEventListener("click", function () {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    // Add to cart logic
    addToCartBtn.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value);
        const price = 224.95;
        const productName = "Weekend Wanderlust Wardrobe";
        const totalPrice = quantity * price;
        const imageUrl = "Images/shop23.jpg"; // Add the image URL

        const item = {
            name: productName,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice,
            image: imageUrl, // Add image to the item
        };

        // Check if product already exists in the cart
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity += quantity;
            product.totalPrice = product.quantity * product.price;
        } else {
            cart.push(item);
        }

        cartCount += quantity;
        updateCartDisplay();
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    });

    // Open cart modal on button click
    cartButton.addEventListener("click", function () {
        cartModal.show();
    });

    // Update cart UI for modal
    function updateCartDisplay() {
        cartCountElement.textContent = cartCount;
        cartItems.innerHTML = ''; // Clear existing items
        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.totalPrice;

            const cartItem = `
                <div class="d-flex justify-content-between align-items-center">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;"> <!-- Display product image -->
                    <span>${item.name}</span>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-sm" onclick="decreaseItemQuantity(${index})">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="increaseItemQuantity(${index})">+</button>
                    </div>
                    <span>$${item.totalPrice.toFixed(2)}</span>
                </div>
                <hr>
            `;
            cartItems.insertAdjacentHTML("beforeend", cartItem);
        });

        cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    }


    
    // Increase item quantity in cart
    window.increaseItemQuantity = function(index) {
        cart[index].quantity += 1;
        cart[index].totalPrice = cart[index].quantity * cart[index].price;
        cartCount++;
        updateCartDisplay();
        localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
    };

    // Decrease item quantity in cart
    window.decreaseItemQuantity = function(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            cart[index].totalPrice = cart[index].quantity * cart[index].price;
            cartCount--;
            updateCartDisplay();
            localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
        } else {
            // Optionally, remove the item from cart when quantity is 0
            cart.splice(index, 1);
            updateCartDisplay();
            localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
        }
    };

    // Initial display of cart when page loads
    updateCartDisplay();
});




















// Checkout button will redirect to the checkout page
document.getElementById('checkoutBtn').addEventListener('click', function () {
    window.location.href = 'checkout.html';
});