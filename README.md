# Code-Quiz

What we need:

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


Additional:

1.  Timer counting down
    - setInterval function ("Timer--")

2.  Save to local memory

_____________________________________________________

Variables:

Timer
score

one question div (text)
four answer divs (buttons)

div for "correct"/"incorrect" messaging (text)
div for next question (button)

object containing {questions {answers}}



