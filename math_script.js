// Variables to manage quiz state
let score = 0;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let selectedDataset = {};
let questionKeys = []; // Will store the keys of the dataset questions
let selectedDatasetChoice = ''; // To track the selected dataset
let selectedNumberOfQuestions = 5; // Default number of questions

// Function to get the selected dataset
function getDataset(choice) {
    // Assume you have separate dictionaries for each subject
    if (choice === 'math1') return math1_subject; // Adjust accordingly for other subjects
    if (choice === 'math2') return math2_subject; // Adjust accordingly for other subjects
    if (choice === 'math3') return math3_subject; // Adjust accordingly for other subjects
    if (choice === 'math4') return math4_subject; // Adjust accordingly for other subjects
}

// Function to set the number of questions
function setNumberOfQuestions(number) {
    selectedNumberOfQuestions = number; // Set the selected number of questions
    startQuiz(); // Start the quiz after selecting the number of questions
}

// Step 1: Choose dataset and start the quiz
function selectOrderAndMode(choice) {
    selectedDatasetChoice = choice;
    document.getElementById('dataset-selection').style.display = 'none'; // Hide dataset selection
    document.getElementById('question-selection').style.display = 'block'; // Show question selection
}

// Step 2: Start the quiz
function startQuiz() {
    document.getElementById('question-selection').style.display = 'none'; // Hide question selection
    document.getElementById('dataset-selection').style.display = 'none';  // Hide dataset selection
    document.getElementById('question-section').style.display = 'block';  // Show question section

    selectedDataset = getDataset(selectedDatasetChoice);
    questionKeys = Object.keys(selectedDataset);
    totalQuestions = Math.min(selectedNumberOfQuestions, questionKeys.length); // Limit total questions to selected number

    currentQuestionIndex = 0;
    score = 0;

    questionKeys = shuffleArray(questionKeys); // Shuffle question keys for random order

    generateQuestion();
}

// Function to ask a question and return it with choices
function askQuestion(correctKey) {
    const correctAnswerData = selectedDataset[correctKey];
    const correctAnswer = correctAnswerData.correctAnswer; // Use the correct answer directly from the value

    const question = correctAnswerData.question; // Use the question from the dataset
    const choices = Object.values(correctAnswerData.choices); // Get choices directly as an array
    const shuffledChoices = shuffleArray(choices); // Shuffle the choices before returning

    return { question, shuffledChoices, correctAnswer };
}

// Generate a new question
function generateQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const correctKey = questionKeys[currentQuestionIndex];
        const { question, shuffledChoices, correctAnswer } = askQuestion(correctKey);

        document.getElementById('question').innerText = question;
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';

        // Create buttons for each choice
        shuffledChoices.forEach((choice) => {
            const button = document.createElement('button');
            button.innerText = choice; // Use the choice value for the button text
            button.onclick = () => checkAnswer(button, correctAnswer); // Pass the correct answer
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
function checkAnswer(button, correctAnswer) {
    const isCorrect = button.innerText === correctAnswer;

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
    document.getElementById('question-section').style.display = 'none'; // Hide question section
    document.getElementById('score-summary').style.display = 'none'; // Hide score summary
    document.getElementById('restart-btn').style.display = 'none'; // Hide restart button
    document.getElementById('next-btn').style.display = 'none'; // Hide next question button

    score = 0; // Reset the score
    currentQuestionIndex = 0; // Reset the question index
}
