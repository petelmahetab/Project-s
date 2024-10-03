const container = document.querySelector('.images');
const loading_Btn = document.querySelector('.btn');

// Number of images to load per row (7)
const imagesPerRow = 14;

loading_Btn.addEventListener('click', () => {
    addNewImages(imagesPerRow); // Load 7 new images when the button is clicked
});

function addNewImages(imageNum) {
    for (let index = 0; index < imageNum; index++) {
        const newImg = document.createElement('img');
        
        // Generating a random number to append to the image URL
        newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 20000)}`;
        
        // Appending the newly created image to the container
        container.appendChild(newImg);
    }
}
