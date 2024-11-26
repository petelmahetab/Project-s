// get the all Elements

const timer=document.querySelector('#timer')
const startButton=document.querySelector('#start')
const resetButton=document.querySelector('#reset')
const stopButton=document.querySelector('#stop')

// Function for the start the timer

let startTime=0
let elaspedTime=0
let timerKaInterval;

// .Date lenge fir osme se elaspedTime -
function startTimer(){
   startTime=Date.now()-elaspedTime

   timerKaInterval=setInterval(()=>{
       elaspedTime=Date.now()-startTime

       timer.textContent=formatTime(elaspedTime)
   }, 10)
}

// Formatting or getting Hr,minutes ....
function formatTime(elaspedTime)
{
   const miliSe=Math.floor((elaspedTime%1000)/10);
 const getSec=Math.floor((elaspedTime/1000)%60);
 const getMin=Math.floor((elaspedTime/(1000*60))%60);
 const getHr=Math.floor((elaspedTime/(1000*60*60)))
   
//  retuning an time as String and to padStart(2,'0') method it will convert Number  --> String
return `${String(getHr).padStart(2,'0')}:${String(getMin).padStart(2,'0')}:${String(getSec).padStart(2,'0')}:${String(miliSe).padStart(2,'0')}`;
 
}


// Function for Stop and Reset Timer of clock
function stopTimer(){
    clearInterval(timerKaInterval);
}

function resetTimer(){
    clearInterval(timerKaInterval);
    elaspedTime=0;
    timer.innerHTML='00:00:00';
}

startButton.addEventListener('click',()=>{

    startTimer();
})

resetButton.addEventListener('click',()=>{
    resetTimer();
   })
   
   stopButton.addEventListener('click',()=>{
    stopTimer();
   })
   
   
   