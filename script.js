const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const title = document.getElementById('title')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const questionNum = document.getElementById('q-num')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = document.getElementById('score')


let shuffledQuestions, currentQuestionIndex
let questionNumber = 1
let currentScore = 0
let questionLength
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    questionNumber++
    setNextQuestion()
})


function quizLength(){
    questionLength = questions.length
}

function startGame(){
    title.classList.add('hide')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()-.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    quizLength()
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    score.innerText = "Score: " + String(currentScore) + "/" + String(questionLength)
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showQuestion(question){
    questionNum.innerText = "Question " + questionNumber
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}
function scoreIncrease(answer){
    if(answer){
        currentScore++
        console.log(currentScore)
    }
    score.innerText = "Score: " + String(currentScore) + "/" + String(questionLength)
}
function selectAnswer(e){
    const selectedButton = e.target
    scoreIncrease(selectedButton.dataset.correct)
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        window.alert("You scored: " + String(currentScore) + " Out Of " + String(questionLength))
        questionNumber = 1
        currentScore = 0
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:'From where does Elwood pick up his brother, Jake?',
        answers: [
            {text: 'Cook County Prison', correct: false},
            {text: 'Joliet Prison', correct: true},
            {text: 'Folsom Prison', correct: false},
            {text: 'Soledad Prison', correct: false}
        ]
    },
    {
        question:'What is the first song played in The Blues Brothers?',
        answers: [
            {text: 'Soul Man', correct: false},
            {text: 'Everybody Needs Somebody to Love', correct: false},
            {text: 'Sweet Home Chicago', correct: false},
            {text: 'She Caught the Katy', correct: true}
        ]
    },
    {
        question:'According to Illinois State Police, what make is the Bluesmobile?',
        answers: [
            {text: 'Ford', correct: false},
            {text: 'Dodge', correct: true},
            {text: 'Lincoln', correct: false},
            {text: 'Cadillac', correct: false}
        ]
    },
    {
        question:'How many fried chickens does Jake order at the Soul Food Cafe?',
        answers: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    },
    {
        question:"At Bob's Country Bunker, what State does Jake say 'The Good Ole Boys' are from?",
        answers: [
            {text: 'Tennessee', correct: true},
            {text: 'Texas', correct: false},
            {text: 'Louisiana', correct: false},
            {text: 'Kentucky', correct: false}
        ]
    },
    {
        question:"What make was the original Bluesmobile?",
        answers: [
            {text: 'Ford', correct: false},
            {text: 'Dodge', correct: false},
            {text: 'Lincoln', correct: false},
            {text: 'Cadillac', correct: true}
        ]
    },
    {
        question:"How much is the soup at Chez Paul?",
        answers: [
            {text: 'Ten Dollars', correct: true},
            {text: 'Five Dollars', correct: false},
            {text: 'Three Dollars', correct: false},
            {text: 'Twelve Dollars', correct: false}
        ]
    },
    {
        question:"The first time Camille tries to kill Jake, what song is playing in the background?",
        answers: [
            {text: 'Think', correct: false},
            {text: 'Minnie the Moocher', correct: false},
            {text: "Hold on I'm Comin", correct: false},
            {text: 'Theme From Peter Gunn', correct: true}
        ]
    },
    {
        question:"The preacher at the Triple Rock Church is played by which iconic rhythm and blues singer?",
        answers: [
            {text: 'Muddy Waters', correct: false},
            {text: 'Otis Redding', correct: false},
            {text: "James Brown", correct: true},
            {text: 'Little Richard', correct: false}
        ]
    },
    {
        question:"Finish the sentence, 'A ___________? Okay I can see that.'",
        answers: [
            {text: 'Guitar', correct: false},
            {text: 'Microphone', correct: true},
            {text: "Speaker", correct: false},
            {text: 'Harmonica', correct: false}
        ]
    },
    {
        question:"What does Jake offer to buy from the man at the next table in the dining room of Chez Paul?",
        answers: [
            {text: 'His Watch', correct: false},
            {text: 'His Wife and Daughters', correct: true},
            {text: "His Shoes", correct: false},
            {text: 'His Hairpiece', correct: false}
        ]
    },
    {
        question:"When Jake and Elwood finally take the stage, Elwood has a briefcase handcuffed to his wrist. What's in it?",
        answers: [
            {text: 'Sunglasses', correct: false},
            {text: "Sheet Music", correct: false},
            {text: 'A Harmonica', correct: true},
            {text: 'We Never Find Out', correct: false}
        ]
    },

    {
        question: "Which of the following weapons does Camille NOT use against Jake (and Elwood) during the film?",
        answers: [
            {text: 'A Hand Grenade', correct: true},
            {text: 'A Flame-Thrower', correct: false},
            {text: "A Remote-Controlled Bomb", correct: false},
            {text: 'An Assault Rifle', correct: false}
        ]
    },
    
    {
        question: "What did the Band earn for the gig at Bob's Country Bunker, and how much beer did they drink?",
        answers: [
            {text: '$300 and $200', correct: false},
            {text: '$400 and $500', correct: false},
            {text: "$300 and $400", correct: false},
            {text: '$200 and $300', correct: true}
        ]
    },
    {
        question: "Which instrument is claimed to be the 'best in the city of Chicago'?",
        answers: [
            {text: 'Guitar', correct: false},
            {text: 'Saxophone', correct: false},
            {text: "Electric Piano", correct: true},
            {text: 'Harmonica', correct: false}
        ]
    },
    
    
]