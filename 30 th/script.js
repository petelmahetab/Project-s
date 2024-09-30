// Js part select child element
var ele=document.querySelectorAll('.element');
// console.log('ele')
//Foreach for multiple element or list selected is by 
ele.forEach(element => {
  
  element.addEventListener('mouseenter',function(){
    element.childNodes[3].style.opacity=1;
  });
//event MouseEnter means were mouse will be on element
  element.addEventListener('mouseleave',function(){
    element.childNodes[3].style.opacity=0;
      });
      //event MouseLeave means were mouse will be leave from the 
//MouseMove on
      element.addEventListener('mousemove',function(d){
        element.childNodes[3].style.left=d.x+"px";
        element.childNodes[3].style.top=d.y+"px";
          });

});



























// var eleImage=document.querySelector('#ele img');

// // add eventListener
// ele.addEventListener('mousemove',function(moves){
//  eleImage.style.left=moves.x+'px';
//  eleImage.style.top=moves.y+'px';
// })

// ele.addEventListener('mouseenter',function(moves){
//     eleImage.style.opacity=1;
//    })

//    ele.addEventListener('mouseleave',function(moves){
//     eleImage.style.opacity=0;
//    })