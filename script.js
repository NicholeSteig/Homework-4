var timeEl = document.querySelector(".navbar-text");
var mainContent = document.getElementById("main");
var answer1 = document.getElementById("button-1");
var answer2 = document.getElementById("button-2");
var answer3 = document.getElementById("button-3");
var answer4 = document.getElementById("button-4");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft !== 0){
        runQuestions();
        
    }

   if(secondsLeft === 0){
       clearInterval(timerInterval);
goToEnd();
   }

  }, 1000);
}

function goToEnd() {
mainContent.textContent = "Game Over";
}




function runQuestions() {
    mainContent.textContent

for (i = 0; i < questions.length; i++){

mainContent.textContent = questions[i].title;



for (j = 0; j < questions[i].choices.length; j++) {
    var choiceBtn = $("<button>");
    console.log()

choiceBtn.addClass("letter-button letter");
choiceBtn.attr("data-letter", questions[i].choices[j]);
   choiceBtn.text(questions[i].choices[j]);
   $("#main").append(choiceBtn);
   console.log(questions[i].choices[j]);
}





}

}





setTime();