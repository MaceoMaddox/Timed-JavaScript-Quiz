//create questions
var currentQuestion = ["Which is NOT a primitive data type?", "Which is an example of a DOM element?", "What is the relationship between the console and the browser?", "How do you activate the debugger?"]
//retrieve DOM elements
var startBtn = document.getElementById("start-btn")
var currentQuestion = "";
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const nextBtn = document.getElementById("next-btn")

const answerButtonsEl = document.getElementById("answer-buttons");

//create the buttons for the quiz
// document.getElementById("startBtn").addEventListener("click", startQuiz);
// nextBtn.addEventListener("click", () => {
//     currentString++;
//     nextString();
// })

//lay the groundwork for what occurs at the beginning of quiz
function startQuiz() {
    console.log("Begin Quiz");
}

//advance to next question
function nextQuestion() {
    showQuestion (currentQuestion)
}

//reflect whether or not an answer is correct when moving forward
function showQuestion(currentQuestion) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer);
        answerButtonsEl.appendChild("button")
    })
}

//create responsiveness for the answering of the question
function chooseAnswer(i) {
    const selectedButton = i.target;
    const correct = selectedButton.dataset.correct;
}