const hourE1=document.getElementById('hour');
const minuteE1=document.getElementById('minute');
const secondE1=document.getElementById('second');

// get AMPM
const convert=document.getElementById('AMPM');


function changeClock(){
    let h=new Date().getHours();
  
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm='AM';

    if(h > 12){
        h= h-12
        ampm='PM'
    }
    
    // For 2 digits

    h=h<10 ?'0'+h :h;
    s=s<10 ?'0'+s :s;
    m=m<10 ?'0'+m:m;

    //set time to our returned elements
    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    convert,(innerText=ampm);

    setTimeout(()=>{
        changeClock();
    },1000)
}
changeClock();