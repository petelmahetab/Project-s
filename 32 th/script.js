var ar=[
    {
    dp:"https://media.gettyimages.com/id/2160064051/photo/bollywood-actor-salman-khan-poses-for-a-photo-during-the-sangeet-ceremony-of-anant-ambani-and.jpg?s=612x612&w=0&k=20&c=18JP9MQ3Y7VmhH6tBH2AyEgUGOgPWua_WPsBpGYQe4A=",story:"https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp:"https://images.unsplash.com/photo-1721251326644-05457660fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1727450577400-5758c59726f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1727631659223-38fe9588ee49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1726503453396-14e5da2f015f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.pexels.com/photos/20889991/pexels-photo-20889991/free-photo-of-kiss.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp:"https://images.unsplash.com/photo-1565679871226-33cfa91bedae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1667599397812-ebaaf8a2ce6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1622923047319-304b570ac19b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1474134747415-e3f837fc52da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];
var stories=document.querySelector('.stories');
var clutter="";
ar.forEach((ele,id)=>{
    clutter+=`<div class="story">
    <img id="${id}" src="${ele.dp}" alt="">
    </div>`;
 
    
})


// document.querySelector('.story').innerHTML=clutter;
stories.innerHTML=clutter;
// stories.story.margin='10px';
// var a=


stories.addEventListener('click',(d)=>{
    document.querySelector('.full_screen').style.display='block';
    document.querySelector('.full_screen').style.backgroundImage=`url(${ar[d.target.id].story})`
    
})



var selectContainer = document.querySelector('.card');
var selectLike = document.querySelector('#like');
var likeCountElement = document.querySelector('#like');
var isLiked = false; // To track like state
var likeCount = 10600; // Initial like count

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
