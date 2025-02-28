
var correct = "";

function getTriviaQuestion() {
    // Construct the URL 
    var myUrl = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";

     // Make an AJAX request to the API
     $.ajax({
        url: myUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Handle the response here
            console.log(data);

            var category = data.results[0].category;
            var question = data.results[0].question;
            var correct_answer = data.results[0].correct_answer;
            correct = correct_answer;
            var incorrect_answer1 = data.results[0].incorrect_answers[0];
            var incorrect_answer2 = data.results[0].incorrect_answers[1];
            var incorrect_answer3 = data.results[0].incorrect_answers[2];

            console.log(category, question, correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3);

            document.getElementById("category").innerHTML = category;
            document.getElementById("question").innerHTML = question;
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
    //alert("checking");

    var user_choice = document.querySelector('input[name="answers"]:checked').value;
    //alert(user_choice);

    if (correct == user_choice) {
        alert("Correct Answer!");
        getTriviaQuestion();
    } else {
        alert("Wrong Answer!");
    }

}

window.addEventListener("load", (event) => {
    getTriviaQuestion();

    const btn = document.getElementById("submitAnswer");
    btn.addEventListener("click", evaluateTriviaQuestion);
});