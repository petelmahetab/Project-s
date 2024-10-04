
var input=document.querySelector('.input');
// console.log(input.checked)
input.checked=false;
const body=document.querySelector("body");
console.log("first"+body)
changeBody();
function changeBody(){
        if(input.checked){
            body.style.background='black';
        }else{
            body.style.background='rgb(204, 204, 197)'
        }
}


input.addEventListener('input',()=>{
    changeBody();
})