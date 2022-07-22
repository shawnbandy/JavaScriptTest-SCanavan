
var quizSpace = document.getElementById("quizSpace")
var questionPrompt = document.getElementById("question");
var answerPrompt = document.getElementById("answers");
var startButton = document.getElementById("startButton");

var questionBank = ["question 1", "question 2", "question 3"];
var questionIndex = 1;
var completeAnswerBank = [
    ["answer 1", "answer2", "answer 3", "AB4"],
    ["question2answer 1", "answer2", "answer 3", "AB4"],
    ["question3answer 1", "answer2", "answer 3", "AB4"],
    ["question4answer 1", "answer2", "answer 3", "AB4"],
];
var completeAnswerIndex = 0;
// var answerBank1 = ["answer 1", "answer2", "answer 3", "AB4"];
// var answerBank2 = ["answer 1", "answer2", "answer 3", "AB4"];
// var answerBank3 = ["answer 1", "answer2", "answer 3", "AB4"];

startButton.addEventListener("click" , function(event){

    startButton.setAttribute("style", "display: none");
    quizSpace.setAttribute("style", "display: flex");

});

answerPrompt.addEventListener("click", function(){
    questionPrompt.textContent = questionBank[questionIndex];
    questionIndex++;

    for(var i = 0; i < 4; i++){
        answerPrompt.children[i].textContent = completeAnswerBank[completeAnswerIndex][i];
    }
    completeAnswerIndex++;

});


