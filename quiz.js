//START GAME FIRST  //SET NEXT QUESTION 2ND //SELECT ANSWER FUNCTION

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-bten')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreContainer = document.getElementById('scoreContainer')
const timeGauge = document.getElementById('timeGauge')
const counter = document.getElementById('counter')

function timeIt() {
    counter++
}



setInterval(timeIt, 1000);
//I want an event to happen every milli secoonds 



var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

//check start-btn //hide start-btn to begin questions 

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}






function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
}



//Questions and answers placed in Array of Objects

const questions = [
    {
        question: 'When did Bill Gates start Microsoft?',
        answers: ["1975", "1980", "1979"]
    },
    {
        question: 'The fist mechanical computer desinged by Charles Babbage was called?',
        answers: ["calculator", "processor", "analytical engine"]

    },
    {
        question: 'Who was the first computer programmer?',
        answers: ["Alan Turing", "Herman Hollerith", "Ada Lovelace"]
    },
    {
        question: 'What is the most basic language Microsoft made?',
        answers: ["visual basic", "batch", "C++"]
    },
    {
        question: 'Resolving errors in a program is known as?',
        answers: ["Error check", "Debugging", "Problem solving"]
    },
    {
        question: 'Who led the NASA software team?',
        answers: ["Jean Bartik", "Margaret Hamilton", "Grace Hopper"]
    }
]



