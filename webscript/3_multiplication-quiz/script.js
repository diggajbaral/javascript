const showScore = document.getElementById('show-score');
const showQuestion = document.getElementById('show-question');
const form = document.getElementById('form');
const input = document.getElementById('input');

let score = 0;
let correctAnswer;
showScore.innerText = 0;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const showHint = document.getElementById('show-hint');
const realAnswer = document.getElementById('real-answer');

function generateQuestion() {
    const randomOne = numbers[Math.floor(Math.random() * numbers.length)];
    const randomTwo = numbers[Math.floor(Math.random() * numbers.length)];

    showQuestion.innerText = `Multiplication of ${randomOne} x ${randomTwo} ?`;

    correctAnswer = randomOne * randomTwo;
    realAnswer.innerText = correctAnswer;

    realAnswer.style.display = 'none';
    showHint.innerText = 'Show Answer';
}

generateQuestion();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const enterData = Number(input.value);

    if (enterData === correctAnswer) {
        score++;
    } else {
        score--;
    }

    showScore.innerText = score;
    input.value = '';
    generateQuestion();

});

showHint.addEventListener('click', function () {

    if (realAnswer.style.display === 'none') {
        realAnswer.style.display = 'block';
        showHint.innerText = 'Hide Answer';
    } else {
        realAnswer.style.display = 'none'
        showHint.innerText = 'Show Answer';
    }

});