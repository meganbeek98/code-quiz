const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function makeQuiz(){
    // created a variable to store the output in HTML
    const output = [];

    // for each of the questions
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // created a variable to store a list of possible answers
            const answers = [];

            // created a variable for each availble answer
            for(letter in currentQuestion.answers){

                // adds a radio button for the HTML
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // adds currentQuestion and its answers to the HTML output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );  
        }
    );

    // lastly, combines our output list into a single string of HTML and puts it on the page
    quizContainer.innerHTML = output.join('');
}

function giveResults(){}

// quiz will pop up right away
makeQuiz();

// show results after hitting 'submit' button
submitButton.addEventListener('click', giveResults);

const quizQuestions = [
    {
        question: "What is something JavaScript is used for?",
        answers: {
            a: "It is used to lay out the basic skeleton of a webpage.",
            b: "It is used solely for styling the way a webpage looks.",
            c: "It is used to add interactive behavior to webpages.",
            d: "none of the above"         
        },
        correctAnswer: "c"

    },
    {
        question: "Which is NOT one of the 7 main data types in JavaScript?",
        answers: {
            a: "summary",
            b: "strings",
            c: "numbers",
            d: "objects"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript data type includes true/false statements?",
        answers: {
            a: "array",
            b: "number",
            c: "undefined",
            d: "boolean"
        },
        correctAnswer: "d"
    },
    {
        question: "'You can use single OR double quotes when writing strings in JavaScript.' True or False?",
        answers: {
            a: "true",
            b: "false"
        },
        correctAnswer: "a"
    },
    {
        question: "Who created the first ever JavaScript?",
        answers: {
            a: "Larry Page",
            b: "Brendon Eich",
            c: "Mark Zuckerberg",
            d: "Bill Gates"
        },
        correctAnswer: "b"
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers: {
            a: "Descriptive Option Models",
            b: "Document Object Mode",
            c: "Document Object Model",
            d: "Dynamic Object Modes",
        },
        correctAnswer: "c"
    },
    {
        question: "What does API stand for in JavaScript?",
        answers: {
            a: "Advanced Programming Integers",
            b: "Advanced Placement Interfaces",
            c: "Application Programming Interfaces",
            d: "Application Placement Integers"
        },
        correctAnswer: "c"
    }
];
