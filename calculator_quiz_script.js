// Variables to manage quiz state
let score = 0;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let selectedDataset = {};
let correctAnswer = "";
let questionOrder = "chronological"; // Default order is chronological
let questionKeys = []; // Will store the keys of the dataset questions
let selectedDatasetChoice = ''; // To track the selected dataset

// Function to get the selected dataset
function getDataset(choice) {
    return choice === 'constants' ? scientific_constants : metric_conversions;
}

// Step 1: Choose dataset and show order selection
function selectOrderAndMode(choice) {
    selectedDatasetChoice = choice;
    document.getElementById('dataset-selection').style.display = 'none'; // Hide dataset selection
    document.getElementById('order-selection').style.display = 'block';  // Show order selection
}

// Step 2: Set the order (chronological or random)
function setOrder(order) {
    questionOrder = order;
    document.getElementById('order-selection').style.display = 'none';  // Hide order selection

    if (order === 'random') {
        document.getElementById('question-selection').style.display = 'block'; // Show question count selection for random
    } else {
        startQuiz(); // Start quiz for chronological order with full dataset
    }
}

// Step 3: Start the quiz
function startQuiz(questionCount = null) {
    document.getElementById('question-selection').style.display = 'none'; // Hide question selection
    document.getElementById('dataset-selection').style.display = 'none';  // Hide dataset selection
    document.getElementById('order-selection').style.display = 'none';    // Hide order selection
    document.getElementById('question-section').style.display = 'block';  // Show question section

    selectedDataset = getDataset(selectedDatasetChoice);
    questionKeys = Object.keys(selectedDataset);

    // If chronological, use all dataset questions
    if (questionOrder === 'chronological') {
        totalQuestions = questionKeys.length;
    } else if (questionOrder === 'random') {
        totalQuestions = questionCount;
        questionKeys = shuffleArray(questionKeys).slice(0, totalQuestions); // Shuffle and pick the selected number of questions
    }

    currentQuestionIndex = 0;
    score = 0;

    generateQuestion();
}

// Function to ask a question and return it with choices
function askQuestion(correctKey) {
    const correctAnswerData = selectedDataset[correctKey];
    correctAnswer = correctAnswerData.name;

    const question = `What is C${correctKey}?`;

    const allChoices = Object.values(selectedDataset).filter(item => item !== correctAnswerData);
    const randomWrongChoices = [];

    while (randomWrongChoices.length < 3) {
        const randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
        if (!randomWrongChoices.includes(randomChoice)) {
            randomWrongChoices.push(randomChoice);
        }
    }

    const choices = [
    `${correctAnswerData.name} (${correctAnswerData.value})`,
    ...randomWrongChoices.map(item => `${item.name} (${item.value})`)
    ];

    shuffleArray(choices);

    return { question, choices };
}

// Generate a new question
function generateQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const correctKey = questionKeys[currentQuestionIndex];
        const { question, choices } = askQuestion(correctKey);

        document.getElementById('question').innerText = question;
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';

        choices.forEach((choice) => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.onclick = () => checkAnswer(button, correctKey);
            choicesDiv.appendChild(button);
        });
    } else {
        showScoreSummary();
    }
}

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Check the answer
function checkAnswer(button, correctKey) {
    const isCorrect = button.innerText.includes(correctAnswer);

    const choicesDiv = document.getElementById('choices');
    Array.from(choicesDiv.children).forEach(btn => {
        btn.disabled = true;
    });

    let message = '';
    if (isCorrect) {
        score++;
        message = "Correct!";
    } else {
        message = `Wrong! The correct answer was: ${correctAnswer}`;
    }

    // Display the feedback below the choices
    document.getElementById('feedback').innerText = message;

    currentQuestionIndex++; // Move to the next question regardless of the answer
    document.getElementById('next-btn').style.display = 'block'; // Show the Next button
}

// Show score summary
function showScoreSummary() {
    const summary = document.getElementById('score-summary');
    summary.innerText = `Your final score is ${score} out of ${totalQuestions}.`; // Use backticks here too
    summary.style.display = 'block';

    document.getElementById('restart-btn').style.display = 'block'; // Show restart button
}

// Next question logic
function nextQuestion() {
    document.getElementById('feedback').innerText = ''; // Clear previous feedback
    document.getElementById('next-btn').style.display = 'none'; // Hide the Next button
    generateQuestion(); // Load the next question
}

// Restart the quiz and go back to the start
function goToStart() {
    document.getElementById('dataset-selection').style.display = 'block'; // Show dataset selection
    document.getElementById('question-selection').style.display = 'none'; // Hide question selection
    document.getElementById('order-selection').style.display = 'none'; // Hide order selection
    document.getElementById('question-section').style.display = 'none'; // Hide question section
    document.getElementById('score-summary').style.display = 'none'; // Hide score summary
    document.getElementById('restart-btn').style.display = 'none'; // Hide restart button
    document.getElementById('next-btn').style.display = 'none'; // Hide next question button

    score = 0; // Reset the score
    currentQuestionIndex = 0; // Reset the question index
}

