const container = document.querySelector('.container'); 

for (let index = 0; index < 30; index++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-container');
    
    const color = randomColor(); 
    colorBox.style.backgroundColor = `#${color}`; 
    colorBox.textContent = `#${color}`; 
    container.appendChild(colorBox);
}

function randomColor() {
    const char = '0123456789abcdef';
    const codeLength = 6;
    let color = '';
    
    for (let i = 0; i < codeLength; i++) { 
        const randomNum = Math.floor(Math.random() * char.length);
        color += char[randomNum];
    }
    
    return color;
}
