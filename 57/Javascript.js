// // Get the elements
// // 1.Dynamic render
// // 2.check options selected

// 
const quizQuestions = [
     {
         question: "What is the capital of the United States?",
         options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
         correctAnswer: "Washington D.C."
     },
     {
         question: "Which U.S. state is known as the 'Sunshine State'?",
         options: ["California", "Texas", "Florida", "Hawaii"],
         correctAnswer: "Florida"
     },
     {
         question: "Who was the 16th president of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"],
         correctAnswer: "Abraham Lincoln"
     },
     {
       question: "What year did the United States declare independence?",
         options: ["1776", "1783", "1812", "1865"],
         correctAnswer: "1776"
     },
    {
         question: "Which U.S. state is the largest by area?",
         options: ["California", "Texas", "Alaska", "Montana"],
         correctAnswer: "Alaska"
     }
 ];

let currentQuestionIndex = 0;
const questionTag = document.querySelector('.question-tag');
const optionsList = document.querySelector('ul');
const submitButton = document.querySelector('#submit');

// Function to load a question and its options
function loadQuestion() {
    // Get the current question and options
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTag.textContent = currentQuestion.question;

    // Clear previous options
    optionsList.innerHTML = '';

    // Create new options dynamically
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.className = 'answer';
        input.id = `option${index + 1}`;
        input.name = 'options';
        input.value = option;

        const label = document.createElement('label');
        label.htmlFor = `option${index + 1}`;
        label.textContent = option;

        // Append the input and label to the list item
        li.appendChild(input);
        li.appendChild(label);
        
        // Append the list item to the ul
        optionsList.appendChild(li);
    });
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const currentQuestion = quizQuestions[currentQuestionIndex];

        // Check if the answer is correct
        if (selectedAnswer === currentQuestion.correctAnswer) {
            alert("Correct!");
        } else {
            alert("Wrong answer.");
        }

        // Load the next question if available
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            alert("Quiz completed!");
        }
    } else {
        alert("Please select an answer.");
    }
});

// Load the first question when the page loads
loadQuestion();
