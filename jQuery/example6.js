

function animateMyDiv() {

    $("#content_div").animate({right: '200px'});

    $("#content_div").animate({bottom: '200px'});

    //multiple params
    $("#content_div").animate({bottom: '400px',  opacity: '0.5',  height: '150px',  width: '150px'});

    //animate with a 'callback' function (fired when animation is complete)
    $("#content_div").animate({right: '500px'}, function() {
        allDone();
    });
}

function allDone() {
    alert("all done.");
}


$(document).ready(function(){   
    $("#animate_button").click(function(){
        animateMyDiv();
    });
});

