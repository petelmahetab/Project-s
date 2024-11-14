// API key of unsplash
const APIKey = 'RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw';

// get FOrm
const formE = document.querySelector('form')

const searchInput = document.getElementById('search-bar')

const searchResult = document.querySelector('.search-results')
const more = document.querySelector('#Show-more')

formE.addEventListener("submit",(e)=>{
 e.preventDefault();
 page=1;
 searchImages();
})

// For searching
let input=" ";
let page=1;
async function searchImages() {
    input = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${APIKey}`;
    console.log(url);
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (page === 1) {
      searchResult.innerHTML = '';
    }
  
    const result = data.results;
    console.log(result);
  page++;

    if (page > 1) {
      more.style.display = 'block';
    }
  
    result.map((r) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add("search-result");
  
      // Corrected 'imge' to 'img'
      const image = document.createElement('img');
      image.src = r.urls.small;
      image.alt = r.alt_description;
  
      const imageLink = document.createElement("a");
      imageLink.href = r.links.html; // Corrected to access the image link
      imageLink.target = "_blank"; // Corrected target setting
      imageLink.textContent = r.alt_description || "View Image"; // Display alt text or placeholder text
  
      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResult.appendChild(imageWrapper);
    });
  }
  

  more.addEventListener('click',()=>{
      searchImages()
  })