var ar=[
    {
    dp:"https://media.gettyimages.com/id/2160064051/photo/bollywood-actor-salman-khan-poses-for-a-photo-during-the-sangeet-ceremony-of-anant-ambani-and.jpg?s=612x612&w=0&k=20&c=18JP9MQ3Y7VmhH6tBH2AyEgUGOgPWua_WPsBpGYQe4A=",story:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp:"https://images.unsplash.com/photo-1721251326644-05457660fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1727450577400-5758c59726f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1727631659223-38fe9588ee49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1726503453396-14e5da2f015f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1723741313198-0c1084da6914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D"
    },
];

var clutter="";
ar.forEach((ele,id)=>{
    clutter+=`<div class="story">
    <img src="${ele.dp}" alt="">
    </div>`;
    
})
console.log(clutter)

document.querySelector('#stories').innerHTML=clutter;
// var a=