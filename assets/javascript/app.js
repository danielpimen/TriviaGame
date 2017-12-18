/*Steps
1) Create loop with timer that will display pages
2)on click, display question and answers
3)allow user to click question
4)if right, print congrats, load next question
5) if wrong, tell right answer, next question
6) store response after each page
7)repeat 10 times
8)print end game screen with correct/wrong answers
9)call function to restart game on click of button

*/

function runQuiz() {
        //Timer
        var number = 30;
        var intervalId;
        console.log('hello');
        runTimer();
          

        function runTimer() {
            intervalId = setInterval(decrement, 1000);
           

        }

        function decrement() {
            number--;
            $("#timer").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
            }
           
        }
        function stop() {
            clearInterval(intervalId);
        }
    }

$(document).ready(function() {
	var player = confirm('Are you ready to play?');
    if (true) {
        runQuiz();
    } else {
        alert('You suck');}

})

//document on click for submit button to submit quiz
    
function submitQuiz(){
	function answerScore(x){
		var radioNo = document.getElementsByName(qName);
		console.log('hello')
	}
}
    
  
    