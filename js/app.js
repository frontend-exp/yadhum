$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $(".menu").toggle();
    });
/*
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    */

    $('.numslide').each(function(){
        var total = $(this).parents('.carousel').find('.carousel-inner .item').length;
        $(this).text('1 ---- '+total);
    });


    $('.carousel').on('slid.bs.carousel', function () {
        var carouselData = $(this).data('bs.carousel');
        var currentIndex = carouselData.getActiveIndex();
        var total = carouselData.$items.length;
        var txt = (currentIndex)+' ---- '+ (total -1);
        $(this).find('.numslide').text(txt);
        alert(numslide);
    });

    $('section#banner, .fill').height($(window).height());

    /**Sticky Menu***/

    var stickyNavTop = $('#home').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#home').addClass('sticky');
            $(".logo img").attr("src","images/logo-grey.png");
        } else {
            $('#home').removeClass('sticky');
            $(".logo img").attr("src","images/logo.png");
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    /**Slick**/

    $('.test-cont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.country-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});