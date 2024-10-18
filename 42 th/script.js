
/* 1. Select container ,left and right part of the Page*/
const container1=document.querySelector('container');

const leftEl=document.querySelector('left');
const rightE1=document.querySelector('right');

/* Listener on Left*/
leftEl.addEventListener('mouseenter',()=>{
    container1.classList.add('a')
})
leftEl.addEventListener('mouseleave',()=>{
    container1.classList.remove('a')
})