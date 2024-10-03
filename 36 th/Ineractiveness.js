
const btn=document.querySelector('.btn');

btn.addEventListener('mouseover',(e)=>{
   const X=(e.pageX-e.offsetLeft);
   const Y=(e.pageY-e.offsetTop);

   btn.style.setProperty("--xPos",X+"px");
   btn.style.setProperty("--yPos",Y+"px");
})