document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav ul");
    const toggle = document.createElement("div");
    toggle.classList.add("nav-toggle");
    toggle.innerHTML = "&#9776;";
    document.querySelector("header").appendChild(toggle);

    toggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    const colorButtons = document.querySelectorAll('.color-btn');

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            colorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// =================first collection===================


function changeImage(color, imageId) {
    // Image source mapping for each color
    const images = {
        black: "Images/black.jpg", // Change to actual path if needed
        green: "Images/green.jpg",
        red: "Images/red.jpg",
        white: "Images/white.jpg"
    };

    // Get the image element by ID
    const imageElement = document.getElementById(imageId);

    // Change the image source based on the selected color
    if (images[color]) {
        imageElement.src = images[color];
    } else {
        console.error('Image not found for color:black.jpg ' + black);
    }
}

// =================second collection===================


function changeImage1(color, imageId) {
    // Image source mapping for each color
    const images = {
        black: "Images/black1.jpg", // Change to actual path if needed
        green: "Images/green1.jpg",
        red: "Images/red1.jpg",
    };

    // Get the image element by ID
    const imageElement = document.getElementById(imageId);

    // Change the image source based on the selected color
    if (images[color]) {
        imageElement.src = images[color];
    } else {
        console.error('Image not found for color:black1.jpg ' + black);
    }
}

// =================third collection===================


function changeImage3(color, imageId) {
    // Image source mapping for each color
    const images = {
        black: "Images/black2.jpg", // Change to actual path if needed
        green: "Images/green2.jpg",
        red: "Images/red2.jpg",
        white: "Images/white2.jpg",
    };

    // Get the image element by ID
    const imageElement = document.getElementById(imageId);

    // Change the image source based on the selected color
    if (images[color]) {
        imageElement.src = images[color];
    } else {
        console.error('Image not found for color:black2.jpg ' + black);
    }
}

// =================fourth collection===================

function changeImage4(color, imageId) {
    // Image source mapping for each color
    const images = {
        black: "Images/black3.jpg", // Change to actual path if needed
        green: "Images/green3.jpg",
        red: "Images/red3.jpg",
        white: "Images/white3.jpg",
    };

    // Get the image element by ID
    const imageElement = document.getElementById(imageId);

    // Change the image source based on the selected color
    if (images[color]) {
        imageElement.src = images[color];
    } else {
        console.error('Image not found for color:black3.jpg ' + black);
    }
}
function addToCart(productName, price) {
    alert(`${productName} has been added to your cart at $${price}.`);
}

// =================footer section==================================

// Example: Toggle visibility of footer columns on mobile
document.addEventListener('DOMContentLoaded', function() {
    const footerColumns = document.querySelectorAll('.footer-column h3');

    footerColumns.forEach(column => {
        column.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('visible');
        });
    });
});

// =================footer section==================================

// JavaScript to handle the change event of the dropdown
document.getElementById('sortOptions').addEventListener('change', function() {
    const selectedOption = this.value;
    console.log("Selected sorting option:", selectedOption);

    // You can add further functionality here based on the selected option
    // For example, sorting a list of products on the page
});


document.getElementById('sizes').addEventListener('change', function () {
    const selectedSize = this.value;
    const priceElement = document.querySelector('.price');
    let price;

    switch (selectedSize) {
        case 'xl':
            price = '$165.50';
            break;
        case 'l':
            price = '$160.50';
            break;
        case 'm':
            price = '$155.50';
            break;
        case 's':
            price = '$150.50';
            break;
        case 'xs':
            price = '$145.50';
            break;
    }

    priceElement.textContent = `${price} & Free Shipping`;
});

