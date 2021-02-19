
var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var codeQuestions = document.querySelector(".question");
var secondsLeft = 60; 



//set the timer for the game
function setTime () {
    var timeInterval = setInterval(function() {
        var countDown = secondsLeft--;
        timeEl.textContent = countDown + " seconds remaining.";

        if (secondsLeft <= 0) {
            clearInterval(timeInterval)
            finalScore();
            timeEl.TextContent = "Time has expired!"
        }
    }, 1000);

    }
      //stops the timer to end the game
    function endGame() {
      clearInnterval(timer);
    }



var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of these is not used to loop?",
      choices: ["for", "while", "foreach", "sequence"],
      answer: "sequence"
    },
    {
      title: "Which of these is not a way to save a variable",
      choices: ["vet", "var", "let", "const"],
      answer: "vet"
    },
    {
      title: "JS date function starts in seconds to current day from what day in 1970",
      choices: ["January 1", "December 31", "June 1", "April 23"],
      answer: "January 1"
    },
  ];

  
//adds an event listener to the start button
startButton.addEventListener("click", function(){
    setTime();
    console.log("started");
    //The start button needs to disappear and a question should appear
    startButton.setAttribute("style", "display: none");
})
  
    //When we answer a question, that question should disappear and the next should pop up
  


    //When an answer is wrong show a message to the user and take five seconds off of the timer
function incorrect() {
  timeLeft -= 5; 
  next();
}

//increases the score by 1 point if the user chooses the correct answer
function correct() {
  score += 1;
  next();
}


    //When we get to the end of the question array we want to save the time 





    //store the scores on local storage
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName",  document.getElementById('name').value);
  getScore();
}


function getScore() {
  var quizContent = `
  <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
  <h1>` + localStorage.getItem("highscore") + `</h1><br> 
  
  <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
  
  `;

  document.getElementById("quizBody").innerHTML = quizContent;
}


    //When the quiz is finished we want to show a results page


    //On the results page we want the user to be able to submit their initials and log their totals
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;



//clears the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");

    resetGame();
}












