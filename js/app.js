$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $(".menu").toggle();
        $(this).css('position','fixed');
    });
});