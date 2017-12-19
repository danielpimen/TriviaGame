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
            alert('Loser!');
            stop();
        }

    }

    function stop() {
        clearInterval(intervalId);
    }
}

$(document).ready(function() {
    confirm('Are you ready to play?');
    if (true) {
        runQuiz();
    } else {
        alert('You suck');
    }


    $('#submitButton').click(function() {
        submitQuiz();


    })

})

//document on click for submit button to submit quiz


function submitQuiz() {
    console.log('hello');

    $('#answersTitle').html('<h4>The correct answers are:</h4>');
    $('#correctAnswer1').html('<h4>1) Copenhagen</h4>');
    $('#correctAnswer2').html('<h4>2) Portugal</h4>');
    $('#correctAnswer3').html('<h4>3) Croatia</h4>');
    $('#correctAnswer4').html('<h4>4) Peru</h4>');

    $('#userTitle').html('<h4>Your answers were:</h4>');
    $('#userAnswer1').html('<h4>1) </h4>');
    $('#userAnswer2').html('<h4>2) </h4>');
    $('#userAnswer3').html('<h4>3) </h4>');
    $('#userAnswer4').html('<h4>4) </h4>');


    function answerLog(qName) {
        console.log('hi')
        var radiosNo = jQuery('[name="qName"]');

        for(var i=0, length=radiosNo.length; i< length; i++){
        	if (radiosNo[i].checked){
        		var answerValue= Number(radiosNo[i].value);
        	}
        }
        if (isNaN(answerValue)){
        	answerValue=0;
        }
        return answerValue;
        console.log('poop');
    }
    answerLog();

    var calcScore = (answerLog('q1') + answerLog('q2') + answerLog('q3') + answerLog('q4'));
	console.log(calcScore);


}

