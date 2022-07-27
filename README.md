Goals of the Assignment:
1. Make a Code Quiz with a start button
2. Start button starts the test. Test consists of questions to answer with a timer ticking downwards
3. Whenever a question is answered, a new question shows up on screen 
4. Whenever a question is answered incorrectly, time is subtracted from the overall timer
5. When all the questions have been answered, or if the timer hits 0, the game is over 
6. Upon game over, user can save their initials and score

This was accomplished by; 
1. HTML has a start screen with a start button
2. Start button uses JS eventListener, which when clicked, presents the user with the test
3. Questions are given to the user, and when answered, a new question is displayed 
4. When an incorrect answer is selected, time is subtracted and "incorrect" is displayed" 
5. Game over screen occurs when everything is answered or timer hits 0
6. User is prompted to enter their initials and see the high score. If they have a score that is high enough to go on the leaderboard, it will be displayed

Application Description: This application runs a JS test when the user presses the button to start the quiz. The user is given a test that cycles through 10 different question, with 4 different answers per question, a question number, and a timer. Upon answering the question, the next question/answer are displayed, and the user is notified if their answer was correct or incorrect. If incorrect, 5 seconds will be subtracted from the timer. After answering the final question, or if their timer reaches 0, the quiz ends, with the user's score (calculated by number of questions that are answered correct) displayed. The user is given the option to type in their initials and submit to view the leaderboard. If the user score high enough, their initials and score are placed onto the leaderboard and stored into localStorage. The leaderboard only holds 3 high scores and is arranged in descending order from every attempt. 

Linked to Deployed Application: https://shawnbandy.github.io/JavaScriptTest-SCanavan/chal4HTML
Linked to Repo: https://github.com/shawnbandy/JavaScriptTest-SCanavan


![](6o2867.gif)

![image description](/assets/img/6o2867.gif)
<img src="/assets/img/6o2867.gif" width="128"/>