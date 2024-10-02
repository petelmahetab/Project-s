// Select CONTAINER
const container = document.querySelector('.container');

// Careers array with quotes
const careers = [
    "Welcome to the Real World... where coffee fuels ideas!",
    "Welcome to Dev Land... where bugs are just undiscovered features!",
    "Welcome to Freelancing... where the boss is always you and the deadlines never sleep!",
    "Welcome to the Instructor's Den... where explaining is the first step to learning!"
];

let careerIndex = 0;
let characterIndex = 0;

// Function to update text
function updateText() {
    // Display the current career with a typewriter effect
    container.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    // Increment characterIndex
    characterIndex++;

    // If the entire career quote is displayed, move to the next one
    if (characterIndex > careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    // If we've gone through all quotes, start over
    if (careerIndex >= careers.length) {
        careerIndex = 0;
    }

    // Call updateText again after a delay
    setTimeout(updateText, 100); // Adjust speed as per preference
}

// Initial call to start the typing effect
updateText();
