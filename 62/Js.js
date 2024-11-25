// Get all the boxes
const boxes = document.querySelectorAll('.box');
// Get the color input element
const selectedColor = document.querySelector('#select');

//Get the button with id
const button=document.querySelector('#erase')

// Initially set the color to green (default value)
let color = "green";

// When the color is changed from the color picker, update the color variable
selectedColor.oninput = () => {
    color = selectedColor.value;
};



// When we select Erase  then selected color will be transparent

button.onclick=()=>{
    color="transparent"
}

// on mouse enter, change color to the selected color
for (let index = 0; index < boxes.length; index++) {
    boxes[index].onmouseenter = () => {
        boxes[index].style.backgroundColor = color;
    };
}
