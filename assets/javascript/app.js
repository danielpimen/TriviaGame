$(document).ready(function(){
	var time=20;
	var count=0;
	var isClicked=false;
	var timer;
	var correct=0;
	var incorrect=0;
	var unanswered=0;

	//Questions & Answers//
	var questions=['What is the capital city of Chile?', 'What is the capital city of Peru',
	'Which of the following countries used to be part of Yugoslavia?', 'Copenhagen is the capital city of what country?'];
	var answer=['Santiago', 'Lima', 'Croatia', 'Denmark'];
	var firstChoice=['Santiago', 'Cuzco', 'Denmark', 'Norway'];
	var secondChoice=['Lima', 'Bogota', 'Greece', 'Sweden'];
	var thirdChoice=['Paris', 'London', 'Croatia', 'Denmark'];
	var fourthChoice=['Madrid', 'Lima', 'Hungary', 'Russia'];

	function showDiv() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
	}
	function hideDiv(){
		$("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();

	}

	function hideResults(){
		$("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();

	}
	function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showDiv();
        $("#question-holder").html(questions[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    }
         $("#choice-holder-1").hover(function() {
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        });

    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)


    function checkAnswer() {

        hideDiv();

        if($(this).text() === answer[count]) {
            stopTime();
            isClicked = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isClicked = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }
    function checkGameEnd() {
        if(count === questions.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }
    function resetTime() {
        time = 15;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideDiv();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(timer);
        timer = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(timer);
        resetTime();
        if(count < questions.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();
     function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/tom_marvolo_riddle.jpg">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/armando_dippet.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/helena_ravenclaw.png">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/merope_gaunt.png">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/snitch.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/phoenix.jpg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/lion.jpg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/neville_longbottom.jpg">');
        }
    }
      function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }
      function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }


    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


  $(".start").on("click", function() {
    startGame();
  });

    })