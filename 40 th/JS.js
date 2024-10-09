
const textArea=document.getElementById('textarea');
// console.log("first"+textArea);
const count=document.getElementById('count');
const remain=document.getElementById('values');
textArea.addEventListener('keyup',(val)=>{
    updateCounter();
})

function updateCounter(){
    count.textContent=textArea.value.length;
    // we get an Attribute of an Text area and subtract with the length of value is inserted in TEXTAREA //
// bedfault then maxlength will be :- >  100
   remain.innerText=textArea.getAttribute('maxlength')-textArea.value.length;
}