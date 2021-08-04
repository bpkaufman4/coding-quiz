


var startBoxEl = document.querySelector("#start-box");
var startEl = document.createElement("button");
startEl.innerHTML = ("Start Game");
startBoxEl.appendChild(startEl);
console.log(startEl);
var questBoxEl = document.querySelector("#quest-box");
var ansBoxEl = document.querySelector("#ans-box");
var highScoreEl = document.querySelector("#final-score");
var scoreCounter = 100;
var questCounter = 0;
var penaltyCounter = 0;
var answerBoolean = [];


q1 = {
    quest: "What would you use to turn a string into an object?",
    answers: [
        a1 = {
            answerText: "JSON.parse",
            isCorrect: true 
        },
        a2 = {
            answerText: "JSON.objectify",
            isCorrect: false 
        },
        a3 = {
            answerText: "JSON.unstringify",
            isCorrect: false 
        },
        a4 = {
            answerText: "JSON.parsify",
            isCorrect: false
        }
    ]

};

q2 = {
    quest: "Which one of the following is a CSS framework?",
    answers: [
        a1 = {
            answerText: "Bootstrap",
            isCorrect: true 
        },
        a2 = {
            answerText: "JQuery",
            isCorrect: false
        },
        a3 = {
            answerText: "Local Storage",
            isCorrect: false
        },
        a4 = {
            answerText: "API",
            isCorrect: false 
        }
    ]

};

q3 = {
    quest: "What is the file type that the browser actually reads?",
    answers: [
        a1 = {
            answerText: ".js",
            isCorrect: false
        },
        a2 = {
            answerText: ".css",
            isCorrect: false
        },
        a3 = {
            answerText: ".html",
            isCorrect: true 
        },
        a4 = {
            answerText: ".Java",
            isCorrect: false 
        }
    ]

};

q4 = {
    quest: "Who developed this project?",
    answers: [
        a1 = {
            answerText: "Jeff",
            isCorrect: false
        },
        a2 = {
            answerText: "Lisa",
            isCorrect: false
        },
        a3 = {
            answerText: "Hector",
            isCorrect: false
        },
        a4 = {
            answerText: "Brian",
            isCorrect: true 
        }
    ]

};





var questQueueArray = [q1, q2, q3, q4];

console.log(questQueueArray[questCounter].answers[questCounter].answerText)

var nextQuestion = function() {
    
    questEl = document.createElement("h2");
    questEl.textContent = (questQueueArray[questCounter].quest);
    questBoxEl.appendChild(questEl);
    ansBoxDiv = document.createElement("div");
    var quizBox = document.querySelector("#quiz-box")
    quizBox.appendChild(ansBoxDiv)
    console.log(questEl);

    for (i=0; i<questQueueArray[questCounter].answers.length; i++) {
        ansEl = document.createElement("button");
        ansEl.setAttribute("id", [i])
        ansEl.setAttribute("class", questQueueArray[questCounter].answers[i].isCorrect)
        ansEl.textContent = questQueueArray[questCounter].answers[i].answerText;
        ansBoxDiv.appendChild(ansEl);
        console.log(ansEl);
        ansEl.addEventListener('click', function(event) {
            var ansStatus = event.srcElement.className
            console.log(ansStatus);
            answerBoolean.push(JSON.parse(ansStatus));
            console.log(answerBoolean);
            questEl.remove();
            ansBoxDiv.remove();
            if (questCounter < questQueueArray.length - 1){
            questCounter++;
            nextQuestion();
            } else {
                console.log("this is the end of the game")
                endGame();
                
            }
        })
    }
}

var timeLeft = 100
var timer = null;

startEl.addEventListener('click', function(event) {
    startEl.remove();
    nextQuestion();
    
    timer = setInterval(() => {
        scoreCounter--
        console.log(scoreCounter);
    }, 1000);

    
});

var finalScore = null;
var initialsInput = null;
var persistentScores = [];
var scoreObj = {
    userName: null,
    score: null
}
var loadScores = function() {
    persistentScores = localStorage.getItem("persistentScores");
    console.log(persistentScores)
    persistentScores = JSON.parse(persistentScores);
    console.log(persistentScores);
    var persistentScoresEl = document.createElement('div');
    persistentScoresEl.textContent = persistentScores[0].userName + " " + persistentScores[0].score; 
    highScoreEl.appendChild(persistentScoresEl);
}
var saveScores = function() {
    localStorage.setItem("persistentScores", JSON.stringify(persistentScores))
}


var endGame = function() {
    clearInterval(timer);
    console.log(scoreCounter);
    for (i=0; i<answerBoolean.length; i++) {
        if (answerBoolean[i] === false) {
            penaltyCounter = penaltyCounter + 5;
            console.log(penaltyCounter);
        }
    }
    finalScore = scoreCounter - penaltyCounter;
    console.log(finalScore);
    var scoreInput = function() {
        var initialsInput = window.prompt('Please enter your initials.');
        if (initialsInput === "" || initialsInput === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return scoreInput();
        }
        else { 
            scoreObj.userName = initialsInput;
            scoreObj.score = finalScore;
            persistentScores.push(scoreObj);
            console.log(persistentScores);
            saveScores();
            loadScores();
        }
      }
    scoreInput();
}


