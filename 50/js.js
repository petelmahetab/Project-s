const getContainer=document.querySelector('.main');
const getDays=document.querySelector('#day');
const getHr=document.querySelector('#hr');
const getMinutes=document.querySelector('#minute');
const getSecs=document.querySelector('#sec');

let newDate=new Date('Jan 1,2025 00:00:00').getTime();

function updateCoutdown(){
   let now=new Date().getTime();
   let gap=newDate-now;
//    console.log(""+gap);
   const second=1000;
   const minute=second*60;
   const hr=minute*60;
   const day=hr*24;

   const d=Math.floor(gap/day)
   const h=Math.floor((gap % day)/hr);
   const m=Math.floor((gap % hr)/minute);
   const s=Math.floor((gap % minute)/second)
   console.log(h)
   
   
   getDays.innerText=d;
   getHr.innerText=h;
   getMinutes.innerText=m;
   getSecs.innerText=s;

     
}
setInterval(updateCoutdown,1000);

