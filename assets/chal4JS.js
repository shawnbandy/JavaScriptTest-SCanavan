

//*making parts of the HTML document objects
var quizSpace = document.getElementById("quizSpace")
var questionPrompt = document.getElementById("question");
var answerPrompt = document.getElementById("answers");
var startButton = document.getElementById("startButton");
var timerDisplay = document.getElementById("timer");


//*this will be the question bank that is displayed to the user
var questionBank = [
    "question 2", 
    "question 3", 
    "question 4"
];
//*this is the question index that is used later
var questionIndex = 1;

//*this is the bank of all the answers possible
var completeAnswerBank = [
    // ["answer 1", "answer2", "answer 3", "AB4"],
    ["question2answer 1", "answer2", "answer 3", "AB4"],
    ["question3answer 1", "answer2", "answer 3", "AB4"],
    ["question4answer 1", "answer2", "answer 3", "AB4"],
];
//*index for the answerbank
var completeAnswerIndex = 0;

//*array of all the correct answers
var correctAnswerArr = [
    "answer 1",
    "question2answer 1",
    "question3answer 1",
    "question4answer 1",
]
//*respective index
var correctAnswersIndex = 0;

//*tally of the score
var score = 0;

//*time given to user to take test
var timer = 60;

//*this will start the text opon clicking the button, which hides the button and displays the test
//*then takeTest function is ran
startButton.addEventListener("click" , function(event){

    startButton.setAttribute("style", "display: none");
    quizSpace.setAttribute("style", "display: flex");
    takeTest();

});

//*master function for the test
function takeTest(){
    //*listens for an answer to be clicked 
    answerPrompt.addEventListener("click", function(event){
       
        //*grabs the answer's text and logs it into a var. checks to see if correct answer was selected, which then increases score and the correctAnswerIndex
        //*index is increased to align the correct answer with the answers given
        var selectedAnswer = event.target.textContent;
        if (selectedAnswer == correctAnswerArr[correctAnswersIndex]){
            score++;
            correctAnswersIndex++;
        }else { 
            correctAnswersIndex++; 
        }
    
        //*cycles through the questions after an answer has been selected
        questionPrompt.textContent = questionBank[questionIndex];
        questionIndex++;
        
        //*gives the user the answers from the answerBank
        for(var i = 0; i < 4; i++){
            answerPrompt.children[i].textContent = completeAnswerBank[completeAnswerIndex][i];
        }
        completeAnswerIndex++;
    
    });

    //*lastly, we run through decrease timer function
    decreaseTimer();
}


//*function sill decrease the timer variable every 1000ms and display time remaining to user
function decreaseTimer(){
    var timeInterval = setInterval(function(){
        timer--;
        timerDisplay.textContent = timer + " seconds left";

        if (timer == 0){
            clearInterval(timeInterval);
            displayHighScore();
        }

    }, 1000);
}

