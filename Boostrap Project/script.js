
// document.addEventListener("DOMContentLoaded",function(){

//     const button=document.getElementById("button");
//     const result=document.getElementById("EMI");

//     button.addEventListener("click",function(){
//        const principleAmount=parseFloat(document.getElementById("initial-amount").value);
//        const rateOfInterst=parseFloat(document.getElementById("interst").value)/100;
//        const noOfMonths=parseInt(document.getElementById("month").value);

//        const total=principleAmount;

//     //    loop which ITRATE Principle Amount 
//     for(let i=0;i<=principleAmount;i++){
//         total*=(1+rateOfInterst);
//     }
   
//     result.value=`After ${noOfMonths} years ,Your Investment will WORTH is $${total.toFixed(2)}`;

//     });
// });

function dothis(){
 
      var principleAmount=parseFloat(document.getElementById("initial-amount").value);
      var rateOfInterst=parseFloat(document.getElementById("interst").value);
      var noOfMonths=parseFloat(document.getElementById("month").value);
// Interest Calculates all multiply given input divided 100 .   
      var interst=principleAmount*rateOfInterst*noOfMonths/100;
// show result which displayed using interst with principleAmount
      var result=interst+principleAmount;

      document.getElementById("EMI").value=`After ${noOfMonths} months ,  Your investment will worth is ${result.toFixed(2)}`;
    };

document.getElementById("button").addEventListener("click",dothis);