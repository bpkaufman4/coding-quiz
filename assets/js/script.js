


var startBoxEl = document.querySelector("#start-box");
var startEl = document.createElement("button");
startEl.innerHTML = ("Start Game");
startBoxEl.appendChild(startEl);
console.log(startEl);
var questBoxEl = document.querySelector("#quest-box");
var ansBoxEl = document.querySelector("#ans-box");
var scoreCounter = 100;
questCounter = 0;

var answerBoolean = [];


q1 = {
    quest: "Quesiton 1",
    answers: [
        a1 = {
            answerText: "answer 1",
            isCorrect: true 
        },
        a2 = {
            answerText: "answer 2",
            isCorrect: true 
        },
        a3 = {
            answerText: "answer 3",
            isCorrect: true 
        },
        a4 = {
            answerText: "answer 4",
            isCorrect: false
        }
    ]

};

q2 = {
    quest: "Quesiton 2",
    answers: [
        a1 = {
            answerText: "answer adls;",
            isCorrect: true 
        },
        a2 = {
            answerText: "answer 2",
            isCorrect: true 
        },
        a3 = {
            answerText: "answer 3",
            isCorrect: false
        },
        a4 = {
            answerText: "answer 4",
            isCorrect: true 
        }
    ]

};

q3 = {
    quest: "Quesiton 3",
    answers: [
        a1 = {
            answerText: "answer 1",
            isCorrect: true 
        },
        a2 = {
            answerText: "answer 2",
            isCorrect: false
        },
        a3 = {
            answerText: "answer 3",
            isCorrect: true 
        },
        a4 = {
            answerText: "answer 4",
            isCorrect: true 
        }
    ]

};

q4 = {
    quest: "Quesiton 4",
    answers: [
        a1 = {
            answerText: "answer 1",
            isCorrect: false
        },
        a2 = {
            answerText: "answer 2",
            isCorrect: true 
        },
        a3 = {
            answerText: "answer 3",
            isCorrect: true 
        },
        a4 = {
            answerText: "answer 4",
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
            var ansStatusNew = JSON.parse(ansStatus);
            console.log(ansStatus)
            answerBoolean.push(ansStatusNew);
            console.log(answerBoolean);
            questEl.remove();
            ansBoxDiv.remove();
            if (questCounter < questQueueArray.length - 1){
            questCounter++;
            nextQuestion();
            clearInterval();
            // endGame();
            if (answerBoolean[i] = true){
                console.log("this answer is true")
            }
            else if (answerBoolean[i] = false){
                console.log("this answer is false")
            }
            }
        })
    }
}

var timeLeft = 100

startEl.addEventListener('click', function(event) {
    startEl.remove();
    nextQuestion();
    
    var timer = setInterval(() => {
        timeLeft--
    }, 1000);

})



