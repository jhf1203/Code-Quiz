
// make sure to add the quiz instructions into this button

var startBtn = $(".startBtn"); 

// var button = $("button");
// var btnAnswer = $(".btnAnswer");

var btnAnswerA = $(".a");
var btnAnswerB = $(".b");
var btnAnswerC = $(".c");
var btnAnswerD = $(".d");


var timer = 100;
var timeLeft = $(".timeLeft").html(timer);

var score = 0
var scoreBoard = $(".scoreBoard").html(score);

var currentQ = 0;

var quiz = [
            {
                question: "Under which umbrella of software development does Javascript fall?",
                answerA: "Front-End Development",
                answerB: "Back-End Development",
                answerC: "Operating System Development",
                answerD: "Development Framework",
                correct: "A"
            },
            {
                question: "Question 2",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "C"
            },
            {
                question: "Question 3",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "D"
            },
            {
                question: "Question 4",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "D"
            },
            {
                question: "Question 5",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "B"
            },
            {
                question: "Question 6",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "A"
            },
            {
                question: "Question 7",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "D"
            },
            {
                question: "Question 8",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "C"
            },
            {
                question: "Question 9",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "C"
            },
            {
                question: "Question 10",
                answerA: "answer a",
                answerB: "answer b",
                answerC: "answer c",
                answerD: "answer d",
                correct: "A"
            },

]


// function timeLeft() {
//     setInterval(function() {
//       timer--;
//       $(".timer").html(timer + " seconds remaining.");
  
//     }, 1000);
//   }


startBtn.on("click", function(){

    $(".introBox").hide();
    startBtn.hide();

        console.log(currentQ);
        $("#questionCurrent").html(quiz[currentQ].question);
        $(".a").html(quiz[currentQ].answerA);
        $(".b").html(quiz[currentQ].answerB);
        $(".c").html(quiz[currentQ].answerC);
        $(".d").html(quiz[currentQ].answerD);

        $(btnAnswerA).on("click", function(){

            if (quiz[currentQ].correct === "A") {

                $("#outcome").html("Correct!  Nice job!");
                score = score + 10 * (timer / 2);

            } else {

                $("#outcome").html("Sorry, wrong answer")

            }

        })

        $(btnAnswerB).on("click", function(){

            if (quiz[currentQ].correct === "B") {

                $("#outcome").html("Correct!  Nice job!")
                score = score + 10 * (timer / 2);

            } else {

                $("#outcome").html("Sorry, wrong answer")
            
            }

        })

        $(btnAnswerC).on("click", function(){

            if (quiz[currentQ].correct === "C") {

                $("#outcome").html("Correct!  Nice job!")
                score = score + 10 * (timer / 2);

            } else {

            $("#outcome").html("Sorry, wrong answer")

            }

        })

        $(btnAnswerD).on("click", function(){

            if (quiz[currentQ].correct === "D") {

                $("#outcome").html("Correct!  Nice job!")
                score = score + 10 * (timer / 2);

            } else {

                $("#outcome").html("Sorry, wrong answer")
            }

        

    })}
    

);








