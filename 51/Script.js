// Select all feedback cards and button
const cards = document.querySelectorAll('.card');
const sendButton = document.getElementById('send');
const feedbackMessage = document.getElementById('feedbackMessage');

// Add click event to each card to mark as selected
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'selected' class from any other card
        cards.forEach(c => c.classList.remove('selected'));
        // Add 'selected' class to the clicked card
        card.classList.add('selected');
    });
});

// Add click event to the "Send Feedback" button
sendButton.addEventListener('click', () => {
    const selectedCard = document.querySelector('.card.selected');
    if (selectedCard) {
        // Display thank-you message based on selected feedback
        feedbackMessage.textContent = `Thank you ❤️..! For your feedback: "${selectedCard.querySelector('h5').innerText}"`;
        feedbackMessage.style.fontSize='3vw';
        feedbackMessage.style.color='green';
    } else {
        // If no feedback is selected
        feedbackMessage.textContent = "Please select a feedback option before submitting!";
        feedbackMessage.style.fontSize='3vw';
        feedbackMessage.style.color='red';
    }
});
