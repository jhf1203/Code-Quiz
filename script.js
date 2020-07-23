
// This is the button that navigates the user from the welcome screen into the actual quiz.
var startBtn = $(".startBtn"); 

// These variables house choices a-d for the quiz answers
var btnAnswerA = $(".a");
var btnAnswerB = $(".b");
var btnAnswerC = $(".c");
var btnAnswerD = $(".d");

// This sets the initial timer at 100.
var timer = 100;

// This displays the functioning timer on the quiz page.
var timeLeft = $(".timeLeft").html(timer);

// This sets the initial score at zero.
var score = 0

// This sets the first question to load as the first one in the array, index 0.
var currentQ = 0;

// This is the input for the user to submit their information to storage
var scoreFormSubmit = $("<button>")
                        .attr("class", "btn btn-link score-submit answerBtn")
                        .attr("type", "submit")
                        .html("submit");

// This is the area where the user types their initials prior to submitting to storage
var scoreFormInput = $("<input>")
                        .attr("class", "form-control name-submit");

// This is the element that houses scoreFormInput and scoreFormSubmit
var scoreForm = $("<form>");

// This is the text that will populate once the user has entered their name into scoreFormInput and submitted.
var thankyouText = $("<p>")
                        .html("Thanks again for playing!  You can play again if you'd like and improve your score, or find out a bit more about me and some of the other work I've done.");

// This is the button option to visit my personal page.
var bioLink = $("<a>")
                        .attr("href", "https://jhf1203.github.io")
                        .html("More about me!")
                        .attr("class", "btn btn-link bio-link")

// This is the button option to restart the quiz.
var reStartBtn = $("<a>")
                        .attr("href", "https://jhf1203.github.io/code-quiz")
                        .html("Play again!")
                        .attr("class", "btn btn-link restart")


// Below you will find the array with the quiz questions
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
        question: "Which JavaScript command will always return either 'true' or 'false?'",
        answerA: "Alert",
        answerB: "Prompt",
        answerC: "Confirm",
        answerD: "Console",
        correct: "C"
    },
    {
        question: "For Array var Arr = ['James', 'Herbert', 'Faulkner'], how would I return 'James' in the console?",
        answerA: "console.log(Arr)",
        answerB: "console.log(James)",
        answerC: "console.log(Arr[1])",
        answerD: "console.log(Arr[0])",
        correct: "D"
    },
    {
        question: "After this quiz, your name and score will be saved, and since this is a static website that means the data will be stored where?",
        answerA: "Cloud Storage",
        answerB: "Virtual Storage",
        answerC: "Session Storage",
        answerD: "Local Storage",
        correct: "D"
    },
    {
        question: "Which command in jQuery would we use to replace 'textContent' from vanilla JavaScript?",
        answerA: "$",
        answerB: ".html",
        answerC: ".attr",
        answerD: ".append",
        correct: "B"
    },
    {
        question: "How can we stop a page from automatically refreshing after a form is submitted?",
        answerA: "preventDefault",
        answerB: "addEventListener",
        answerC: "querySelector",
        answerD: "console.log",
        correct: "A"
    },
    {
        question: "If our H1 element is the only one located within the header, we know it is the _______ of the header ",
        answerA: "type",
        answerB: "class",
        answerC: "subject",
        answerD: "child",
        correct: "D"
    },
    {
        question: "When should you use 'innerHTML' instead of 'textContent' when modifying an element?",
        answerA: "If you need for the content to be a specific color",
        answerB: "If you need more SEO visibility",
        answerC: "If you are adding HTML to the element",
        answerD: "It doesn't matter, these are one in the same",
        correct: "C"
    },
    {
        question: "if var a = 'Jim' and var b = 'jim' how would we make a === b?",
        answerA: "a == b",
        answerB: "a === b.toLowerCase",
        answerC: "a.toLowerCase === b.toLowerCase",
        answerD: "a.push === b",
        correct: "C"
    },
    {
        question: "Which of the following is not an event?",
        answerA: "keystroke",
        answerB: "keyup",
        answerC: "keydown",
        answerD: "keypress",
        correct: "A"
    },
]


// This is the function that begins the timer, and also manages when the user is redirected if time expires
function timeLeftFunc() {
    setInterval(function() {
      timer--;
      $(".timeLeftSpot").html(timer);

    //   if (timer < 0) {
    //     $(".introOutro").show();
    //     $(".introOutroH1").html("Uh Oh!");
    //     $(".introOutroP").html("Looks like you ran out of time.  Your total score was " + score + ".  Give it another whirl!")
    //     $(".introOutroUL").remove();
    //     $(".introOnlyP").remove();
    //     $(".introOutro").append(reStartBtn);
    // };  
    }, 1000);
}


// This function populates the questions and answers into the appropriate area on the quiz.  Once all ten questions have been answered, it then redirects the user to a window allowing them to enter their name to save their score in local storage.
function nextQuestion() {
    if (currentQ < 10) {
        $(".questionCurrent").html(quiz[currentQ].question);
        $(".a").html(quiz[currentQ].answerA);
        $(".b").html(quiz[currentQ].answerB);
        $(".c").html(quiz[currentQ].answerC);
        $(".d").html(quiz[currentQ].answerD);      
    } else { 
        $(".introOutro").show();
        $(".introOutroH1").html("All Done!");
        $(".introOutroP").html("Thank you for taking my quiz!  Your total score was " + score + ".  Enter your name below to be forever enshrined into the hall of amazing!")
        $(".introOutroUL").remove();
        $(".introOnlyP").remove();
        $(".introOutro").append(scoreForm);
        $(scoreForm).append(scoreFormInput);
        $(scoreForm).append(scoreFormSubmit);
    };
};


// This event saves the name and score into Local Storage, and gives the user the option of either taking the quiz again, or visiting my personal webpage.
scoreFormSubmit.on("click", function(event) {

    event.preventDefault();
    var name = $(".name-submit").val();
    $(".introOutroP").hide();
    localStorage.setItem("Name", name);
    localStorage.setItem("Score", score);
    scoreForm.hide();
    $(".introOutro").append(thankyouText, bioLink, reStartBtn);
});


// This function determines whether or not the answer is correct, and takes appropriate action.  Once answered, it also calls for the next question to be populated.
$('.btnAnswer').on('click', function() {

    if (quiz[currentQ].correct ===  $(this).attr('name')) {
        $(".outcome").html("Correct!  Nice job!").attr("style", "color:#57876F");
        score = (score + 10 + timer);
        currentQ++;
        nextQuestion();
        $(".scoreBoard").html(score);      
    } else {
        $(".outcome").html("Sorry, wrong answer").attr("style", "color:#A92521");
        timer = timer - 10;
        currentQ++;
        nextQuestion();
    }
})

// This command launches the user from the welcome screen into the actual quiz.
startBtn.on("click", function(){
    $(".introOutro").hide();
    startBtn.hide();
    timeLeftFunc()
    nextQuestion()
});












