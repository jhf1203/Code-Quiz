I thoroughly enjoyed completing the bio page Homework assignment.  Please see below for an outline of what was required, with details on the project following it:

1.  Array of questions and answers

2.  Button to start the quiz
    - .on("click" function)
        - This will set off a function that runs steps 3-6 
        - Submit button changes text content from "start" to "submit"
    - for loop begins here

3.  First set of questions and answers must populate
    - pull from array in #1

4.  button to submit the correct answer
    - .on("click" function)

5.  Logic to determine if the answer is correct or incorrect.
    - Message for "correct" or "incorrect"
        - if/then
            - Add to score
            - Populate correct/incorrect messaging
    - Populate button for next question

6.  Button for next question must cycle back to #3.

7.  Timer counting down
    - setInterval function ("Timer--")

8.  Save to local memory


_____________________________________________________

The Code:

I was happy to be able to accomplish this project with only five functions, and the addition of jQuery into our lectures as I was completing this helped immensely as well.

My approach for formulating the script was to map out in advance how I wanted the quiz to flow within the parameters given, on a scratch file that is not contained in the repo.  This helped to drive which functions I would need and what their content would need to be.  I knew that:

- I wanted a "Welcome" screen as opposed to a header with unnecessary text that would make the page more busy.  This would ensure that the user's attention is fully on how the quiz works with respect to scoring and timekeeping, and the quiz would launch whenever they were ready.

- After that the questions needed to be populated.  Originally I had a function to launch the first question and an additional one to launch the following questions, but once I did some trimming I was able to fit all of this into one function.

    - I first built an array that contained objects of questions, possible answers, and the correct answer.  Instead of a for loop I opted for a conditional that ends the quiz after the last question (index 9 in var "quiz" is question 10).  
    - By assigning simple classes in the HTML for each answer button I was able to reduce the wordiness of the script with unneccesary functions.  Originally I had var answerA = $(".a").html, but realized since I was only typing that once I could simply cut the variable and define the class location inline with the function.
    - This function also needed to house what would happen if the timer reached zero, because at that point we would need to cease loading questions, instruct them that their time was up, and direct them to begin the quiz again.

- Once the questions are populated we wait for the user to select an answer, and then determine whether or not the answer is correct.  The user then receives a point bonus for a correct answer or a time penalty for an incorrect one.  
    - I experimented several different methods of attributing the correct answer to what was clicked, and ultimately the most simple option was to assign each button a name in the HTML.  If the correct answer in the quiz array matched the name of the button that was clicked then the answer is correct, otherwise it isn't correct.
    - Once that happens we notify the user of the outcome of their choice, adjust either the score or the time accordingly, and then roll back into the preceding function to determine if we need to load the next question or if we're finished.

- Per the nextQuestion function, as soon as the tenth question is answered we populate the quiz results and give the user an input to save their name and score to local storage.  
    - Rather than creating a separate div for this, I was able to cut back on the lines of code by just changing the content of the welcome screen to house the updated HTML to reflect the quiz ending. 

- Finally, once the form is submitted the content of the welcome window (.introOutro) changes yet again, allowing the user to either re-take the quiz or to visit my profile/portfilio site from a previous assignment.
_____________________________________________________

The Content:

Aesthetically on this project I challenged myself to balance my personal brand of cleanliness, functionality, and minimalism with a look and feel that was a bit more lively and might mimic a game show.  I decided to bridge these two concepts in the color palette of the quiz, which is anchored by a work from Jacob Ouillette's "108 Brushstrokes" collection.  The background is colorful without being loud, and allows me to tie in the full color spectrum (with some restraint) into the project.

In keeping with my desire for cleanliness I chose to incorporate this solely as the buttons are hovered upon.  Using a color picker tool on the artwork I was able to match brushstrokes with various highlight colors, and the inconsistency of how these are mapped out throughout the eight buttons in the project give the quiz a slightly more game-y feel without making the page visually incohesive.  Although it may not feel like it, besides the button highlights and the background image the entire rest of the page is only done in black and white.
_____________________________________________________


Summary:

This project was admittedly a big challenge for me, and I encountered multiple roadblocks in making this quiz functional.  Thankfully I was able to enlist the help of our TAs during office hours as well as connect with my tutor.  Hearing how the logic should work in a one-on-one setting taught me a great deal about how I need to approach projects like this initially prior to just jumping into code, and I look forward to applying this method on future assignments.

