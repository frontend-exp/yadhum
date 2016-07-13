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
/*
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
*/
/**Accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
 **/

/**stick menu**/

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#home').addClass('fixed');
            $(".logo img").attr("src","images/logo-grey.png");
        } else {
            $('#home').removeClass('fixed');
            $(".logo img").attr("src","images/logo.png");
        }
    });

    /**Slick**/
    $('.univ-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
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

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    /**
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
     **/

    $('.filter a').click(function(e) {
        e.preventDefault();
        var a = $(this).attr('href');
        a = a.substr(1);
        $('.gallery > div').each(function() {
            if (!$(this).hasClass(a) && a != 'all')
                $(this).addClass('hide');
            else
                $(this).removeClass('hide');
        });

    });

});


$(window).load(function(){
    function activate_accordion(course_id) {
        var active_item;
        if (course_id == false) {
            active_item = false;
        } else {
            active_item = $('.accordion div[id="course-' + course_id + '"]').attr('active');
        }

        $(".accordion").accordion({
            collapsible: true,
            active: parseInt(active_item),
            heightStyle: "content",
            icons: {
                "header": "ui-icon-plus",
                "activeHeader": "ui-icon-minus"
            }
        });
    }
    $(document).ready(function () {
        activate_accordion(40);
    });
});