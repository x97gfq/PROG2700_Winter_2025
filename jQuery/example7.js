
$(document).ready(function(){   
    $("#removestyle_button").click(function(){
        $("#content_div").removeClass('content_div2');
    });
    $("#addstyle_button").click(function(){
        $("#content_div").addClass('content_div2');
    });
});

