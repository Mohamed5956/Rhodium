$(document).ready(function() {
    $('.top-seller-section .item').hover(function() {
        const $images = $(this).find('.img img');
        let index = 0;

        // Function to change opacity
        const changeOpacity = () => {
            $images.eq(index).css('opacity', 0); // Fade out current image
            index = (index + 1) % $images.length; // Move to next image
            $images.eq(index).css('opacity', 1); // Fade in next image
        };

        // Start interval for changing opacity
        const interval = setInterval(changeOpacity, 2000); // Change image every 2 seconds

        $(this).data('interval', interval); // Store interval ID for clearing later
    }, function() {
        const $images = $(this).find('.img img');
        clearInterval($(this).data('interval')); // Clear the interval
        $images.css('opacity', 0); // Hide all images
        $images.first().css('opacity', 1); // Show the first image again
    });
});
