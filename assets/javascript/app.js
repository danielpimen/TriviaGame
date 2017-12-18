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
	var myQuestions =[
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
		c: 'Berlin',
	}

	correctAnswer: 'c'},

	]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function quizBody{
	var output= [];

	myQuestions.each(
		currentQuestion. questionNumber) => {
		var answers= [];
		for (letter in currentQuestion.answers){
			answers.push(
				'<label> <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter} : ${currentQuestion.answers[letter]} </label>');

		}
		output.push(
			'<div class="question"> ${currentQuestion.question}</div> <div class="answers"> ${answers.join("")} </div>' );
	}
}
function showQuestion(){
	var answerContainers=quizContainer.querySelectorAll('.answers');
	var numCorrect=0;
	myQuestions.each((currentQuestion, questionNumber) => {
	var answerContainer=answerContainers[questionNumber];
	var selector= 'input[name=question + questionNumber +']: checked;
	var userAnswer=(answerContainer.querySelector(selector) || {}.value;)
	})

}
})
