define([
    'jquery',
    'slick'
], function ($){

    let categorySlider = $('.categories-slider > .pagebuilder-column-line');

    if (categorySlider.length) {

        categorySlider.slick({
            slidesToScroll: 1,
            swipeToSlide: true,
            slidesToShow: 6,
            dots: false,
            infinite: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '60px',
                        centerMode: true,
                        arrows: false,
                        slidesToShow: 2,
                    }
                }
            ],
        });
    }
});
