

//*making parts of the HTML document objects
var quizSpace = document.getElementById("quizSpace")
var questionPrompt = document.getElementById("question");
var answerPrompt = document.getElementById("answers");
var startButton = document.getElementById("startButton");
var timerDisplay = document.getElementById("timer");
var descriptionEl = document.getElementById("description");
var rightOrWrongDisplay = document.getElementById("rightOrWrong");
var highScoreDisplay = document.getElementById("highScorePage");
var scoreReport = document.getElementById("score");
var beatEl = document.getElementById("beat");
var questionNumberEl = document.getElementById("questionNumber");
var userNameEl = document.getElementById("userName");
var joinFormEl = document.getElementById("joinForm");
var submitButtonEl = document.getElementById("join");
var userInitialsEl = document.getElementById("userInitials");

var playAgainButton = document.getElementById("playAgain");

//*this will be the question bank that is displayed to the user
var questionBank = [
    "What does 'document.getElementByID' do?", 
    "What does the expression 'if (x == 12) {var y = 10;}' do? (Assume x is already a declared number)", 
    "What does '.textContent' do?",
    "What does '.setattribute' do?", //*this is intentionlly left NOT in camelCase
    "Which expression would add y to x? Assume both variables are numbers.", 
    "How would you create an event listener for a mouse click?",    
    "How would you increase var i by 1 until it reaches 10 and log the numbers to the console?", 
    "How would you declare a function expression?", 
    "How would you make a function declaration?",
];
//*this is the question index that is used later, and question number which is displayed for the user
var questionIndex = 0;
var questionNumber = 1;

//*this is the bank of all the answers possible
var completeAnswerBank = [
    // ["answer 1", "answer2", "answer 3", "AB4"],
    ["Nothing", "Formats the HTML document", "Sets target object to specified ID", "Returns an element object representing the element whose ID was matched"],
    ["Nothing", "Returns an error", "Sets y to 10 when X is equal to 12", "Sets X equal to 12, then sets y to 10"],
    ["Nothing", "Sets text content", "sets the inner HTML", "sets the outer HTML"],
    ["Nothing", "Sets a value to the specified element", "Sets an element to the specified value", "Gets the current value of an attribute"],
    ["None of these", "x = y", "x -= y", "x += y"],
    ["None of these", ".addEventListener('click')", ".eventListener('click')", ".listenEvent('click')"],
    ["None of these", "(for var i = 0; i < 11; i++){console.log(i)}", "(for var i = 0; i < 10; i++){console.log(i)}", "(for var i = 0; i < 11; i--){console.log(i)}"],
    ["None of these", "var x = function(a, b)", "function x(a, b)", "function(a, b) = x"],
    ["None of these", "var x = function(a, b)", "function x(a, b)", "function(a, b) = x"],
];
//*index for the answerbank
var completeAnswerIndex = 0;

//*array of all the correct answers
var correctAnswerArr = [
    "Containers for storing data",
    "Returns an element object representing the element whose ID was matched",
    "Sets y to 10 when X is equal to 12",
    "Sets text content",
    "Nothing",
    "x += y",
    ".addEventListener('click')",
    "(for var i = 0; i < 11; i++){console.log(i)}",    
    "var x = function(a, b)",
    "function x(a, b)",
]
//*its respective index
var correctAnswersIndex = 0;

//*tally of the score
var score = 0;

//*time given to user to take test
var timer = 80;

//*this will start the test upon clicking the button, which hides the button and displays the test
//*then takeTest function is ran
startButton.addEventListener("click" , function(event){

    startButton.setAttribute("style", "display: none");
    descriptionEl.setAttribute("style", "display: none");
    quizSpace.setAttribute("style", "display: flex");
    document.querySelector("header").setAttribute("style", "display: none");

    takeTest();

});

//*function for the test
function takeTest(){


    //*listens for an answer to be clicked 
    answerPrompt.addEventListener("click", function(event){


        //*if statement that will check, at the start of the function, to see if quiz is done and will display ending screen 

       
        //*grabs the answer's text and logs it into a var. checks to see if correct answer was selected, which then increases score and the correctAnswerIndex
        //*index is increased to align the correct answer with the answers given
        var selectedAnswer = event.target.textContent;
        if (selectedAnswer == correctAnswerArr[correctAnswersIndex]){
            score++;
            correctAnswersIndex++;
            rightOrWrongDisplay.textContent = "Correct!"
        }else { 
            //*subtract time if wrong
            timer -= 5;
            correctAnswersIndex++; 
            rightOrWrongDisplay.textContent = "Incorrect!"
        }

        if(questionNumber == 10){
            timer = 0;
            return;
        }
    
        //*cycles through the questions and increases question number after an answer has been selected
        questionNumber++;
        questionNumberEl.textContent = "Question Number " + questionNumber;
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

//*function sill decreases the timer variable every 1000ms and display time remaining to user
//*when timer reaches 0, the final screen is displayed
function decreaseTimer(){
    var timeInterval = setInterval(function(){
        timer -= .1;
        timerDisplay.textContent = Math.round(timer) + " seconds left";

        if (timer < 0){
            timerDisplay.textContent = 0 + " seconds left";
        }

        if (timer == 0 || timer < 0){
            clearInterval(timeInterval);
            displayHighScore();
        }

        console.log(timer);


    }, 100);
}


function displayHighScore(){
    //*hides the quiz page elements and displays the high score page elements
    startButton.setAttribute("style", "display: none");
    descriptionEl.setAttribute("style", "display: none");
    quizSpace.setAttribute("style", "display: none");
    document.querySelector("header").setAttribute("style", "display: none");


    scoreReport.textContent = score + " out of 10.";

    //*puts your score into the local storage. Only displays if it's high enough to beat out others
    if (score >= 0){ 
        joinFormEl.setAttribute("style", "display: flex");
        submitButtonEl.addEventListener("click", function(event){
            event.preventDefault();
            var userInit = submitButton();
            checkYourScore(userInit, score);
            makeLeaderboard();
            submitButtonEl.disabled = true;
            joinFormEl.setAttribute("style", "display: none");
        });
        highScoreDisplay.setAttribute("style", "display: flex;");
    }else{
        makeLeaderboard();
        highScoreDisplay.setAttribute("style", "display: flex;");
    }

    //*lets you play again
    playAgainButton.addEventListener("click", function(){
        document.location.reload(); 
    })

}

function makeLeaderboard(){
    //*this function creates the list element, parses the object into a var, then sets the text of the list to the its owner
    var firstList = document.createElement("li")
    var secondList = document.createElement("li")
    var thirdList = document.createElement("li")

    var first = JSON.parse(localStorage.getItem("firstPlace"))
    var second = JSON.parse(localStorage.getItem("secondPlace"))
    var third = JSON.parse(localStorage.getItem("thirdPlace"))


    firstList.innerText = first.name + " " + first.score
    secondList.innerText = second.name + " " + second.score
    thirdList.innerText = third.name + " " + third.score

    document.getElementById("highScoreList").appendChild(firstList);
    document.getElementById("highScoreList").appendChild(secondList);
    document.getElementById("highScoreList").appendChild(thirdList);
}

//*dummy values
var userCole = {
    name: "", 
    score: ""
}
var userBrad = {
    name: "", 
    score: ""
}
var userAmy = {
    name: "", 
    score: ""
}

//*pulls the usernames from the localstorage, or sets an initial 3 dummy values 
var storedNamesRetrieve = JSON.parse(localStorage.getItem("storedNames"));
if (storedNamesRetrieve == null) {storedNamesRetrieve = [userCole, userBrad, userAmy];}

function checkYourScore(userName, userScore){
    //*this function takes all of the objects, sorts them in the array by score, then stores them in localstorage
    
    //*sets this object blank everytime this is ran, then assigns the arguments into it
    var userUser = {
        name: "", 
        score: 0
    }

    userUser.name = userName;
    userUser.score = userScore;

    //*adds it to the array, stores everything in localStorage, then sorts the array
    storedNamesRetrieve.push(userUser);
    localStorage.setItem("storedNames", JSON.stringify(storedNamesRetrieve));
    storedNamesRetrieve.sort((a, b) => b.score - a.score);

    //*sets these for the makeLeaderBoard function, since these will be the top three scoring objects
    localStorage.setItem("firstPlace", JSON.stringify(storedNamesRetrieve[0]));
    localStorage.setItem("secondPlace", JSON.stringify(storedNamesRetrieve[1]));
    localStorage.setItem("thirdPlace", JSON.stringify(storedNamesRetrieve[2]));
}



//*this function gets the name the user inputs into the form, and then returns AAA as default or whatever they put in
function submitButton(){
    var userInitials = userInitialsEl.value;
    if (!userInitials ){
        userInitials = "AAA";
    }
    if (userInitials.length > 3){
        holderInitials = "";
        for (var i = 0; i < 3; i++){
            holderInitials += userInitials[i]
        }
        userInitials = holderInitials;
    }
    return userInitials;
}











