// Get DOM elements for month, day, day number, and year
const MthName = document.getElementById('month-name');
const DyName = document.getElementById('day-name');
const DyNum = document.getElementById('day-number');
const year = document.getElementById('year');

// Function to update date and time
function updateDate() {
    const date = new Date(); // Get current date and time

    // Set month name
    MthName.innerText = date.toLocaleString('en', { month: "long" });

    // Set day name (weekday)
    DyName.innerText = date.toLocaleString('en', { weekday: 'long' });

    // Set day number (date)
    DyNum.innerText = date.getDate();

    // Set year
    year.innerText = date.getFullYear();
}

// Call updateDate immediately and every 1 second (1000 ms)
setInterval(updateDate, 1000);
clearInterval(updateDate,1000)
// Initial call to set the current date right away
updateDate();
