$(document).ready(function () {

    const body = $('body'),
        button = $('#button'),
        modal = $('#modal'),
        close = $('#close');

    // modal
    button.on('click', function () {
        modal.addClass('modal_active');
        body.css('overflow','hidden');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
        body.css('overflow','visible');
    });


    //  Portfolio slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});