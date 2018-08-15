$(function(){
    $(".slides").slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<span class="prev-arrow"><img src="assets/img/left-arrow.svg"/></span>',
        nextArrow: '<span class="next-arrow"><img src="assets/img/right-arrow.svg"/></span>',
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});