document.addEventListener("DOMContentLoaded", function () {
    let currentRating = 0;

    document.querySelectorAll('.star-rating .fa').forEach(function(star, index) {
        star.addEventListener('mouseover', function() {
            // On mouse over, highlight the stars up to the hovered one
            document.querySelectorAll('.star-rating .fa').forEach(function(s, i) {
                if (i <= index) {
                    s.classList.remove('fa-star-o');
                    s.classList.add('fa-star');
                } else {
                    s.classList.remove('fa-star');
                    s.classList.add('fa-star-o');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            // On mouse out, revert to the currently selected rating
            document.querySelectorAll('.star-rating .fa').forEach(function(s, i) {
                if (i < currentRating) {
                    s.classList.remove('fa-star-o');
                    s.classList.add('fa-star');
                } else {
                    s.classList.remove('fa-star');
                    s.classList.add('fa-star-o');
                }
            });
        });

        star.addEventListener('click', function() {
            // On click, set the current rating
            currentRating = index + 1; // Rating starts from 1, so we add 1 to index
            console.log("Rating selected:", currentRating);
        });
    });
});



let stickyContainer = document.querySelector('.sticky-container');

    window.addEventListener('scroll', function () {
        // Add the "sticky" class as soon as scrolling starts
        if (window.scrollY > 0) {
            stickyContainer.classList.add('sticky');
        } else {
            stickyContainer.classList.remove('sticky');
        }
    });