//select main as container and cursor also and apply addeventlistener on it
 const parent=document.querySelector('#main');
 const cursor=document.querySelector('.cursor')

//Add listener on main parent name "mousemove"
parent.addEventListener('mousemove',(moves)=>{
//   console.log(moves.y)
  // moveof cursor moves.x on Horizontally and Vertically we have moves.y
  cursor.style.left=moves.x+'px';
  cursor.style.top=moves.y+'px';

}); 