// Combined function to change image and price with zoom functionality
function changeImageAndPrice(color, imgId, zoomContainerId) {
    // Image source mapping for each color
    const images = {
        black: "Images/shop1.jpg", // Change to actual path if needed
        green: "Images/shop2.jpg",
        red: "Images/shop3.jpg",
    };

    // Price mapping for each color
    const prices = {
        black: 145.00,
        green: 155.00,
        red: 165.00,
    };

    // Get the image element by ID
    const imageElement = document.getElementById(imgId);
    const zoomContainer = document.getElementById(zoomContainerId);

    // Change the image source based on the selected color
    if (images[color]) {
        imageElement.src = images[color];
        zoomContainer.style.backgroundImage = `url('${images[color]}')`;
    } else {
        console.error('Image not found for color: ' + color);
    }

    // Change the price based on the selected color
    const priceElement = document.querySelector('.price');
    if (prices[color]) {
        priceElement.innerHTML = `$${prices[color].toFixed(2)}`;  // Update the price
    } else {
        console.error('Price not found for color: ' + color);
    }
}

// Zoom function for the image
function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX = e.offsetX ? e.offsetX : e.touches[0].pageX;
    var offsetY = e.offsetY ? e.offsetY : e.touches[0].pageY;
    var x = (offsetX / zoomer.offsetWidth) * 100;
    var y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
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



// JavaScript to handle star rating selection
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


// JavaScript for Modal
var modal = document.getElementById("imageModal");
var img = document.querySelector("image/white.jpg");
var modalImg = document.getElementById("modalImg");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
// JavaScript for Image Slider
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
window.addEventListener('scroll', function() {
    var details = document.querySelector('.details-section');
    var position = details.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        details.classList.add('visible');
    }
});
