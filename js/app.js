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

});