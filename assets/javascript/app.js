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
$(document).ready(function() {
	var myQuestions[
	{question: 'What is the capital of Denmark?',

	answers: {
		a: 'Denmark City',
		b: 'Copenhagen',
		c: 'Berlin',
	}

	correctAnswer: 'b'},
	{question: 'Where is the city of Lima located?',

	answers: {
		a: 'Colombia',
		b: 'Mexico',
		c: 'Peru',
	}

	correctAnswer: 'c'},
	{question: 'Which country has a capital city named Lisbon?',

	answers: {
		a: 'Portugal',
		b: 'Poland',
		c: 'Nigeria',
	}

	correctAnswer: 'c'},

	]
    var correct = 0;
    var wrong = 0;
    var questionArray = ['']
    var player = confirm('Are you ready to play?');
    if (true) {
        runQuestion();
        insertQuestion();
    } else {
        alert('You suck');
    }



    function runQuestion() {
        //Timer
        var number = 30;
        var intervalId;

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
        runTimer();


    }


    function insertQuestion() {
        console.log('hello');
        $("#question-div").html('<h4>What is the capital of Denmark?</h4><p>A) Denmark City</p><p>B) Copenhagen</p> <p> C)Berlin</p>');

    }
    insertQuestion();
})