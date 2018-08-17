$(function(){
    // $header = $('.header');
    // $('')
    // $header.css({
    //     'position': 'fixed',
    //     'z-index': '20'
    // });

    // $(window).on('scroll',function(){
    //     $this = $(this);
    //     if($this.scrollTop() > $this.height()){
    //         $header.css({
    //             'position': 'fixed',
    //             'z-index': '20'
    //         });
    //     }
    //     else $header.css('position','relative');
    // });

    $navbar = $(".navbar");
    $screen = $(".container-fluid");
    $sidebar = $(".sidebar-mini");
    $sidebar_links = $(".sidebar-mini a");
    $close_sidebar = $("#close-side");

    $navbar.click(function(){
        $sidebar.css({
            "width":"240px"
        });
        $screen.addClass('fade-out');
    });

    $sidebar_links.click(function(){
        $sidebar.css({
            "width":"0px"
        });
        $screen.removeClass('fade-out');
    });

    $screen.click(function(){
        if($sidebar.css("width") == "240px"){
            $(this).removeClass("fade-out");
            $sidebar.css({
                "width":"0px"
            });
        }
    });
});