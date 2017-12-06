$(document).ready(function () {

    $(window).on('scroll', function () {
       if($(window).scrollTop() >=50){
        $('.main-header').addClass('fixed-header')
       }
       else {
        $('.main-header').removeClass('fixed-header')
       }

        if($(window).scrollTop() >=2450){
            $('.button-animated').addClass('animated tada')
        }
    });

    $('.navigation-button').on('click', function () {
       $(this).toggleClass('navigation-button-open');
       $('.navigation').toggleClass('navigation-mobile').css('display', 'block')
    });



    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });


});

