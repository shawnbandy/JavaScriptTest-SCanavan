
var quizSpace = document.getElementById("quizSpace")
var questionPrompt = document.getElementById("question");
var answerPrompt = document.getElementById("answers");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click" , function(event){

    startButton.setAttribute("style", "display: none");
    quizSpace.setAttribute("style", "display: flex");

});


answerPrompt.children[0].textContent = "test"

