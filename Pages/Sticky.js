// Track last scroll position
let lastScrollTop = 0;
const header = document.getElementById("productHeader");
let isHeaderVisible = false; // Track header visibility

// Scroll event to show or hide the header based on scroll position
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Show the header when the user scrolls past 100px
  if (scrollTop > 100 && !isHeaderVisible) {
    header.classList.add("header-visible");
    isHeaderVisible = true; // Set visibility flag
  } else if (scrollTop <= 100 && isHeaderVisible) {
    header.classList.remove("header-visible");
    isHeaderVisible = false; // Reset visibility flag
  }

  lastScrollTop = scrollTop; // Update last scroll position
});

// Cart notification logic when adding to cart
document.getElementById('addToCartBtn')?.addEventListener('click', function () {
  const notification = document.getElementById('cartNotification');
  notification.style.display = 'block';

  // Hide the notification after 5 seconds
  setTimeout(function () {
    notification.style.display = 'none';
  }, 1000);
});

// Cart open and close functionality
function openCart() {
  document.getElementById("offCanvasCart").classList.add("active");
}

function closeCart() {
  document.getElementById("offCanvasCart").classList.remove("active");
}
