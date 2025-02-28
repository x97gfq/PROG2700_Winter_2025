
function getQuote() {
    var fortuneUrl = "https://api.justyy.workers.dev/api/fortune";

    $("#message").hide();

    $.ajax(
        {
            url: fortuneUrl, 
            success: function(result){
                $("#message").html(result);

                setTimeout(function() {
                    $("#message").fadeIn();
                    $("#message").animate({fontSize: "2em"});
                    $("#message").animate({fontSize: "1em"});
                },250);
            }
        }
    );
}

$(document).ready(function() {
    $("#getFortune").click(function(){
        getQuote();
    });
});



