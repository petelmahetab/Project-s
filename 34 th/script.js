// Select CONTAINER
const container = document.querySelector('.container');

// Careers array
const careers = ['Real World', 'Dev', 'Freelancer', 'Instructor'];

let careerIndex = 0;
let characterIndex = 0;

// Function to update text
function updateText() {
    // Display the current career with a typewriter effect
    container.innerHTML = `<h1>Welcome to ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    // Increment characterIndex
    characterIndex++;

    // If the entire career is displayed, move to the next one
    if (characterIndex > careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    // If we've gone through all careers, start over
    if (careerIndex >= careers.length) {
        careerIndex = 0;
    }

    // Call updateText again after a delay
    setTimeout(updateText, 400);
}

// Initial call to start the typing effect
updateText();
