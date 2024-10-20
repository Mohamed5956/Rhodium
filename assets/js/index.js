$(document).ready(function() {
    $('.top-seller-section .item , .recently-section .item').hover(function() {
        const $images = $(this).find('.img img');
        let index = 0;

        // Function to change opacity
        const changeOpacity = () => {
            $images.eq(index).css('opacity', 0); // Fade out current image
            index = (index + 1) % $images.length; // Move to next image
            $images.eq(index).css('opacity', 1); // Fade in next image
        };

        // Start interval for changing opacity
        const interval = setInterval(changeOpacity, 1000); // Change image every 2 seconds

        $(this).data('interval', interval); // Store interval ID for clearing later
    }, function() {
        const $images = $(this).find('.img img');
        clearInterval($(this).data('interval')); // Clear the interval
        $images.css('opacity', 0); // Hide all images
        $images.first().css('opacity', 1); // Show the first image again
    });
    var swiper = new Swiper('.recently-section .products-slider .slider', {
        slidesPerView: 5,
        spaceBetween: 24,
        speed: 1500,
        navigation: {
            nextEl: '.products-slider .swiper-button-next',
            prevEl: '.products-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
    var swiper = new Swiper('.hero-section .hero-slider .slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        mousewheel: true,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of the anchor tag

            // Get the parent item container
            const itemContainer = button.closest('.item');

            // Show the quantity selector
            const quantitySelector = itemContainer.querySelector('.quantity-selector');
            quantitySelector.style.display = 'inline-flex';

            // Handle the quantity increase/decrease
            const quantityInput = quantitySelector.querySelector('.quantity-input');
            const plusButton = quantitySelector.querySelector('.plus');
            const minusButton = quantitySelector.querySelector('.minus');

            plusButton.addEventListener('click', function () {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });

            minusButton.addEventListener('click', function () {
                if (quantityInput.value > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            });
        });
    });
});