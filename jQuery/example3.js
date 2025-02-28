

function buttonClicked() {
    alert("you clicked the button");
}

function toggleDiv() {
    $("#toggle_div").toggle();
}

$(document).ready(function(){   
    $("#user_button").click(function(){
        buttonClicked();
    });
    $("#toggle_button").click(function(){
        toggleDiv();
    });
});

/*
$(document).ready(function(){​
    $("#user_button").click(function(){​
       alert("you clicked the button.");
    });​
 });
*/
