$(function(){

    $close_note = $(".note img:last-child");
    $note = $(".note");
    $header = $(".header");
    $con_fluid = $(".container-fluid:not(.index)");

    $note.css({
        "top": "0px",
        "transition": "top 2000ms linear"
    });

    $header.css({
        "top": "70px",
        "transition": "top 2000ms linear"
    });

    $con_fluid.css({
        "margin-top": "70px",
        "transition": "margin-top 2000ms linear"
    });

    $close_note.click(function(){
        $note.css({
            "top": "-70px",
            "transition": "top 500ms linear"
        });
        $header.css({
            "top": "0px",
            "transition": "top 500ms linear"
        });
        $con_fluid.css({
            "margin-top": "0px",
            "transition": "margin-top 500ms linear"
        });
    });

    $navbar = $(".navbar");
    $screen = $(".container-fluid");
    $sidebar = $(".sidebar-mini");
    $sidebar_links = $(".sidebar-mini a");

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
            $screen.removeClass("fade-out");
            $sidebar.css({
                "width":"0px"
            });
        }
    });
});