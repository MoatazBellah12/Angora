$(document).ready(function () {
    $('#loadingScreen').fadeOut(700, function () {
        $('body').css('overflow-y', 'auto')
    })
    $('p').addClass('lead')
    $(window).scroll(function () {
        let scrollValue = $(window).scrollTop();
        if (scrollValue > 3) {
            $('nav').css('backgroundColor', '#fff')
            $('nav ul li a , nav button i').css('color', '#000')
            $('nav .navbar-brand img').attr('src', 'imgs/logo-red.png')
        } else {
            $('nav').css('backgroundColor', 'transparent')
            $('nav ul li a , nav button i').css('color', '#fff')
            $('nav .navbar-brand img').attr('src', 'imgs/logo-white.png')
        }
    })
})