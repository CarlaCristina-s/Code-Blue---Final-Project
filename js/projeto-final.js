/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function () {
    $('.testimonial-cards').each(function () {
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 600) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
        }
    });
});
