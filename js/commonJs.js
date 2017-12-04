$(document).ready(function () {

    $('.works-item').on('mouseenter', function () {
        $('.works-item-info h3').css('color', 'gray')
    });
    $('.works-item').on('mouseleave', function () {
        $('.works-item-info h3').css('color', 'red')
    });



});