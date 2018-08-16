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
    $(".disco-slide").slick({
        infinite: false,
        arrows: true,
        // autoplay: true,
        // mobileFirst: true,
        // autoplaySpeed: 8000,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: '<span class="prev-arrow"><img src="assets/img/left-arrow.svg"/></span>',
        nextArrow: '<span class="next-arrow"><img src="assets/img/disco-right.svg"/></span>',
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 468,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});