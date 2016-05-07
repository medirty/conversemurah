$(window).scroll(function () {

    var Scroll = $(this).scrollTop();

    /*WELCOME*/

    $('#welcome_shoes_1').css({
        'transform': 'translate(0px, ' + Scroll / 12 + '%)'
    });

    $('#welcome_shoes_2').css({
        'transform': 'translate(0px, -' + Scroll / 14 + '%)'
    });

    $('#welcome_big_blue_circle').css({
        'transform': 'translate(0px, -' + Scroll / 10 + '%)'
    });

    /*ABOUT*/

    $('#about_shoes').css({
        'transform': 'translate(0px, ' + Scroll / 60 + '%)'
    });

    $('#about_sign').css({
        'transform': 'translate(0px, -' + Scroll / 16 + '%)'
    });

    /*LOW*/

    $('#low_shoes').css({
        'transform': 'translate(' + Scroll / 80 + '%, 0px)'
    });

    /*HIGH*/

    $('#high_shoes').css({
        'transform': 'translate(-' + Scroll / 100 + '%, 0px)'
    });


});