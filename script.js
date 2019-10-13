var timeEl = document.querySelector(".navbar-text");
var mainContent = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

   if(secondsLeft === 0){
       clearInterval(timerInterval);
goToEnd();
   }

  }, 1000);
}

function goToEnd() {
mainContent.textContent = "Game Over";
}

setTime();