$(function() {
    $('#menuBtn').on('click', e => {
        $('.navigation').toggleClass('active');
        $('.fa-bars').toggleClass('fa-times');
    })
    $('.navbar a').click(() => {
        $('.navigation').toggleClass('active')
    })
    $(window).on('load', e => {
        setTimeout(() => {
            $('.loader-container').addClass('active')
        }, 1000)
        AOS.init({
            duration: 800,
            delay: 200
        });

    })
    $(window).on('scroll', e => {
        if ($(this).scrollTop() > 150) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed')
        }

        $('section').each(function(e) {

            let height = $(this).height();
            let offset = $(this).offset().top - 50;
            let id = $(this).attr('id');
            let top = $(window).scrollTop();

            if (top > offset && top < offset + height) {
                $('header .navbar a').removeClass('active')
                $('header').find(`[href="#${id}"]`).addClass('active');
            }

        });
    })
})