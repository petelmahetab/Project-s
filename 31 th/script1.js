//  console.log("My name is Avinash");
//  console.log("Second Statement")
//  const variable="Container";
//  function Mod(n1,n2){
//      return n1%n2;
//  }
// // const add=Mod(10,2);
//  export{variable};
// // // export{add};

///SOME Assignments question In the class//
//1 Write an Function which takes 3 parameter and return largest amoung them
function returnMax(a,b,c){
    return a>b&& a>c?`Max ${a}`:(b>c?`Max ${b}`:`Max${c}`);
}
returnMax(10,20,30);

// 2 To check given string is Palindrome or not
function CheckPalindrom(num){
   return num.split('').reverse.join('');
}
CheckPalindrom(12321);
