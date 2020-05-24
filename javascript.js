// Jquery plugin for toggled menu
$(function() {
    $('.hamburger').click(function() {
        $('nav').addClass('show');
    });

    $('.exit-responsive').click(function() {
        $('nav').removeClass('show');
    });
});