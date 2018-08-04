$(function(){
    $hide_password = $('i.hide-password');

    $hide_password.click(function(){
        $this = $(this);
        $hide_input = $this.siblings('input');
        if($this.hasClass('fa-eye')){
            $this.removeClass('fa-eye');
            $this.addClass('fa-eye-slash');
        }
        else{
            $this.addClass('fa-eye');
            $this.removeClass('fa-eye-slash');
        }
        if($hide_input.attr('type') == "text"){
            $hide_input.attr('type','password');
        }
        else{
            $hide_input.attr('type','text');
        }
    });
});