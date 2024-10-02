//Select that Span where Heart image is present

var Bdy=document.querySelector('body');
console.log(Bdy);

Bdy.addEventListener('mousemove',(event)=>{
   const Xaxis=event.offsetX;
   const Yaxis=event.offsetY;
   const Span=document.createElement('span');
   Span.style.left=Xaxis+'px';
   Span.style.top=Yaxis+'px';
   Bdy.appendChild(Span);

//    random width and height hearts
const random=Math.random()*100;
   Span.style.width=random+'px';
   Span.style.height=random+'px';
   setTimeout(()=>{Span.remove();},5000)
})