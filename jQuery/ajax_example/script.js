
var correct = "";

function getTriviaQuestion() {
    // Construct the URL 
    var myUrl = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";

    // Make an AJAX request to the API
    $.ajax({
        url: myUrl,
        url: myUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Handle the response here
            var question = data.results[0].question;
            var category = data.results[0].category;
            var correct_answer = data.results[0].correct_answer;
            correct = correct_answer;
            var incorrect_answer1 = data.results[0].incorrect_answers[0];
            var incorrect_answer2 = data.results[0].incorrect_answers[1];
            var incorrect_answer3 = data.results[0].incorrect_answers[2];

            document.getElementById("question").innerHTML = question;
            document.getElementById("category").innerHTML = category;
            document.getElementById("correct_answer").innerHTML = correct_answer;
            document.getElementById("incorrect_answer1").innerHTML = incorrect_answer1;
            document.getElementById("incorrect_answer2").innerHTML = incorrect_answer2;
            document.getElementById("incorrect_answer3").innerHTML = incorrect_answer3;
            
            document.getElementById("answer1").value = correct_answer;
            document.getElementById("answer2").value = incorrect_answer1;
            document.getElementById("answer3").value = incorrect_answer2;
            document.getElementById("answer4").value = incorrect_answer3;
        },
        error: function(error) {
            // Handle errors here
            console.error("Error fetching data:", error);
        }
    });
}

function evaluateTriviaQuestion() {
    var selected_answer = document.querySelector('input[name="answers"]:checked').value;
    
    //get next question
    if (correct == selected_answer) {
        alert("you got it right!  next one...");
        getTriviaQuestion();
    } else{
        alert("Wrong answer.");
    }
}

window.addEventListener("load", (event) => {
    getTriviaQuestion();

    const btn = document.getElementById("submitAnswer");
    btn.addEventListener("click", evaluateTriviaQuestion);
});