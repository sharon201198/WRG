// Custom js

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".spt_header_1").addClass("sticky");
    } else {
        $(".spt_header_1").removeClass("sticky");
    }
});

$('.spt_testimonial_multiple').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true,
        }
    }
})