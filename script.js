var timeEl = document.querySelector(".navbar-text");
var mainContent = document.getElementById("main");


var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;


        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            goToEnd();
        }


    }, 1000);


}

function goToEnd() {
    mainContent.textContent = "Game Over. Your score is: " + secondsLeft;
}




function runQuestions() {
    

    for (i = 0; i < 5; i++) {

        mainContent.textContent = questions[i].title;



        for (j = 0; j < 4; j++) {
            var choiceBtn = $("<button>");

            choiceBtn.addClass("choice-button answer");
            choiceBtn.attr("data-choice", questions[i].choices[j]);
            choiceBtn.attr("correct-answer", questions[i].answer);
            choiceBtn.text(questions[i].choices[j]);
            $("#main").append(choiceBtn);
            

            $(".choice-button").on("click", function () {

                var chosen = ($(this).attr("data-choice"));
                var answer = ($(this).attr("correct-answer"));

                if (chosen === answer) {

                    $("#main").append("correct");
                }

                else {

                    $("#main").append("incorrect");
                }
                clearInterval(mainContent);
            });
        }

        



    }

}



setTime();
runQuestions();