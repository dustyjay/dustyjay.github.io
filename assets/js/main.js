$(function(){

    // Smooth scrolling effect
    $("a[href^='#']").click(function(e){
        var elem = $(this.getAttribute('href'));
        if(elem.length) $('html,body').stop().animate({'scrollTop':elem.offset().top},1000);
        e.preventDefault();
    });


    $(".slides").slick({
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="prev-arrow"><img src="assets/img/left-arrow.svg"/></span>',
        nextArrow: '<span class="next-arrow"><img src="assets/img/right-arrow.svg"/></span>',
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $(".disco-slide").slick({
        infinite: false,
        arrows: true,
        autoplay: true,
        // mobileFirst: true,
        autoplaySpeed: 8000,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<span class="prev-arrow"><img src="assets/img/right-arrow.svg"/></span>',
        nextArrow: '<span class="next-arrow"><img src="assets/img/right-arrow.svg"/></span>',
       
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 468,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    $iframes = $(".spotify iframe");

    $youtube_frame = $("#youtube-frame");
    $tidal_frame = $("#tidal-frame");
    $spotify_frame = $("#spotify-frame");
    $soundcloud_frame = $("#soundcloud-frame");
    // $itunes_frame = $("#itunes-frame");


    // change streaming form
    $stream = $("img.stream");
    $streams = $(".video-text .dropdown-menu li img");

    $streams.click(function(){
        $this = $(this);
        var new_src = $this.attr("src");
        var current_src = $stream.attr("src");

        var new_id = $this.attr("id");
        var current_id = $stream.attr("id");
        
        $stream.attr("src",new_src);
        $this.attr("src",current_src);
        
        $stream.attr("id",new_id);
        $this.attr("id",current_id);

        if(new_id == "youtube"){
            $iframes.hide(400);
            $youtube_frame.show(600);
        }

        if(new_id == "tidal"){
            $iframes.hide(400);
            $tidal_frame.show(600);
        }

        if(new_id == "soundcloud"){
            $iframes.hide(400);
            $soundcloud_frame.show(600);
        }

        if(new_id == "spotify"){
            $iframes.hide(400);
            $spotify_frame.show(600);
        }

        // if(new_id == "itunes"){
        //     $iframes.hide(400);
        //     $itunes_frame.show(600);
        // }
    });
});