//Get the elements
const getTable=document.querySelector('#tab');
const tableHeading=getTable.querySelectorAll('th');
let startWidth,startX,startCol;

tableHeading.forEach(col=>{
   const getSpan=col.querySelector('.dragAble');
   getSpan.addEventListener('mousedown',(e)=>{
       startX=e.pageX;
       startWidth=col.offsetWidth;
       startCol=col;

       document.addEventListener('mousemove',resize);
       document.addEventListener('mouseup',stop)
   });
});
// For resizing the width of table
function resize(e){
    // Increment the column Width
    if(startCol)
    {
        const newColWidth=startWidth + (e.pageX - startX );
        startCol.style.width= newColWidth +'px';
    }

}

// For the stopping it
function stop(){
    // remove those listeners
    document.removeEventListener('mousemove',resize);
    document.removeEventListener('mouseup',stop);
    startCol=null;
}

