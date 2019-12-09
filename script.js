var timeEl = document.querySelector(".navbar-text");
var mainContent = document.getElementById("main");

var cardTitle = document.querySelector("#card-title");
var cardQuestion = document.querySelector("#question-title");
var answer1button = document.querySelector("#answer1");
var answer2button = document.querySelector("#answer2");
var answer3button = document.querySelector("#answer3");
var answer4button = document.querySelector("#answer4");
var statusLine = document.querySelector("#status-line");

var secondsLeft = 75;

var questions = [
    {
        "title": "What is the name of Link's horse?",
        "choices": ["Ponyta", "Epona", "Malanya", "Blaze"],
        "answer": "Epona"
    },
    {
        "title": "Which of the following is not the name of a Zelda enemy?",
        "choices": ["Moblin", "Goomba", "Rope", "Koopa"],
        "answer": "Koopa"
    },
    {
        "title": "In The Legend of Zelda: Breath of the Wild, what is the name of the name of the elephant-shaped Divine Beast?",
        "choices": ["Vah Medoh", "Vah Rudania", "Vah Ruta", "Vah Naboris"],
        "answer": "Vah Ruta"
    },
    {
        "title": "Which of the following instruments has never appeared in a Zelda game?",
        "choices": ["Ocarina", "Theramin", "Guitar", "Organ"],
        "answer": "Theramin"
    },
    {
        "title": "In The Legend of Zelda: Ocarina of Time, how many spiritual medallions must Link collect?",
        "choices": ["6", "3", "8", "5"],
        "answer": "6"
    },
];

// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = "Time left: " + secondsLeft;


//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             goToEnd();
//         }


//     }, 1000);


// }

function goToEnd() {
    mainContent.textContent = "Game Over. Your score is: " + secondsLeft;
};




function showQuestion() {
        var questionNumber = i + 1;
        cardTitle.textContent = "Question " + questionNumber;
        cardQuestion.textContent = questions[i].title;
        answer1button.value = questions[i].choices[0];
        answer2button.value = questions[i].choices[1];
        answer3button.value = questions[i].choices[2];
        answer4button.value = questions[i].choices[3];
};

function runQuestion1() {
    i = 0;
    showQuestion();
    answer1button.addEventListener("click", function() {
       if (questions[0].choices[0] === questions[0].answer) {
        statusLine.textContent = "Correct";
       }
       else{
           statusLine.textContent = "Incorrect";
           secondsLeft - 5;
       }
      });

      answer2button.addEventListener("click", function() {
        if (questions[0].choices[1] === questions[0].answer) {
         statusLine.textContent = "Correct";
        }
        else{
            statusLine.textContent = "Incorrect";
            secondsLeft - 5;
        }
       });

       answer3button.addEventListener("click", function() {
        if (questions[0].choices[2] === questions[0].answer) {
         statusLine.textContent = "Correct";
        }
        else{
            statusLine.textContent = "Incorrect";
            secondsLeft - 5;
        }
       });
       answer4button.addEventListener("click", function() {
        if (questions[0].choices[3] === questions[0].answer) {
         statusLine.textContent = "Correct";
        }
        else{
            statusLine.textContent = "Incorrect";
            secondsLeft - 5;
        }
       });
};

runQuestion1();
// setTime();

