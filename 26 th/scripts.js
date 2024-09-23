// var selectContainer=document.querySelector('.container');
// var selectLike=document.querySelector('#heart');
// console.log("hii");
// selectContainer.addEventListener('dblclick',function(){
//   selectLike.style.transform='translate(-50%,-50%) scale(1.5)';
//   selectLike.style.opacity=0.8;
//   // We need 2 time out for increaseing and drcreasing/
//   // only 1 time after heart will be Vanishes but we nee d it will decrease slowly. 
//   setTimeout(function(){
//     selectLike.style.opacity=0;
//   },1000);
//  setTimeout(function(){
//    selectLike.style.transform='translate(-50%,-50%) scale(0)';
//  },2000)
 
  
// });


var selectContainer = document.querySelector('.container');
var selectLike = document.querySelector('#heart');
var likeCountElement = document.querySelector('#like');
var isLiked = false; // To track like state
var likeCount = 10900; // Initial like count

selectContainer.addEventListener('dblclick', function() {
  // Toggle the like state
  isLiked = !isLiked;

  if (isLiked) {
    // Change heart color to red and scale it
    selectLike.classList.add('liked'); // Add a class to change color
    selectLike.style.transform = 'translate(-50%, -50%) scale(1.5)';
    selectLike.style.color='red';
    selectLike.style.opacity = 0.8;

    // Increase like count
    likeCount++;
    likeCountElement.textContent = likeCount.toLocaleString()+'K'; // Update count

    // Fade out effect after 1 second
    setTimeout(function() {
      selectLike.style.opacity = 0;
    }, 1000);

    // Scale down the heart after 5 seconds
    setTimeout(function() {
      selectLike.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 5000);
  } else {
    // Change heart color back to original
    selectLike.classList.remove('liked'); // Remove the class
    // Decrease like count
    likeCount--;
    likeCountElement.textContent = likeCount.toLocaleString(); // Update count
  }
});
