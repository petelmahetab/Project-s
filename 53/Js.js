// Get elements
const btn = document.querySelector('#your');
const birthday = document.querySelector('#input');
const asOutput = document.querySelector('#return');

// Calculate age function
function calculateAge() {
    const birthDate = birthday.value; // Get the value of the input
    console.log("Birthday input value:", birthDate); // Debugging: check input value

    if (birthDate === '') {
        alert('Please fill in your DOB');
    } else {
        const age = getAge(birthDate);
        console.log("Calculated age:", age); // Debugging: check calculated age
        asOutput.innerText = age;   
    }
}

// Function to calculate age
const getAge = (birthDate) => {
    const currentDate = new Date();
    const yourBirthDay = new Date(birthDate); // Parse the date from input
    let age = currentDate.getFullYear() - yourBirthDay.getFullYear();
    let month = currentDate.getMonth() - yourBirthDay.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && currentDate.getDate() < yourBirthDay.getDate())) {
        age--;
    }
    return age;
};

// Event listener for button click
btn.addEventListener('click', calculateAge);
