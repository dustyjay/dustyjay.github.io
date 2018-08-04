$(function(){

    $time_text = $('.time-text');

    // change active time-box option

    $time_box = $(".time-box > div");
    $time_box.click(function(){
        $this = $(this);
        $this.addClass('active');
        $this.siblings().removeClass('active');
    });

    setInterval(function(){
        if(window.innerWidth < 1264){
            $time_text.removeClass('col-6').addClass('col-8');
        }
        else{
            $time_text.addClass('col-6').removeClass('col-8');
        }
        if(window.innerWidth >= 992){
            $main_dashboard.removeClass('fade-out');
            $sidebar.css("width","0px");
        }
    }, 200);

    // change time-box to a dropdown

    $time_box_div = $(".time-box-div");
    $time_box_dropdown = $(".dropdown.col");


    $time_box_li = $(".dropdown.col-4 li");
    $time_box_btn = $(".dropdown.col button");

    $time_box_li.click(function(){
        $this = $(this);
        $this.parent().siblings().children('span').text($this.text());
        $this.addClass('active').siblings().removeClass('active');
    });


    // show sidebar on smaller screens

    $navbar = $(".navbar");
    $main_dashboard = $(".main-dashboard");
    $sidebar = $(".sidebar-mini");
    $close_sidebar = $("#close-side");

    $navbar.click(function(){
        $sidebar.css("width","240px");
        $main_dashboard.addClass('fade-out');
    });

    $close_sidebar.click(function(){
        $sidebar.css("width","0px");
        $main_dashboard.removeClass('fade-out');
    });

    $main_dashboard.click(function(){
        if($sidebar.css("width") == "240px"){
            $(this).removeClass("fade-out");
            $sidebar.css("width","0px");
        }
    });




});