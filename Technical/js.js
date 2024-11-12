// console.log("Hii");

 // 1. Make CurryFunction with Multiplication of 3 values
// // --> Function chaining we can call it as also .Instead of calling mutiple arguments we create an such type of function. In this concept of CLOSURE which inner function has access to lexical 


// function topFunction(a){
//     return function(b){
//         return function(c){
//            return a*b*c;
//         }
//     }
// }
// console.log("Curry Function",topFunction(10)(20)(30));



//2. We have create function where i need to  merge 2 string Alternatively.

// const str1 = "hii12";
// const str2 = "everyone";

// function returnMergeStrings(str1,str2){
//     // we need result varible and i for iterating on both the strings
//     let result=0;
//     let i=0;
// // I should less than size of both strings
//     for(i=0;i<str1.length &&i<str2.length; i++)
//     {
//         let m;
//         // im adding both string to result
//     result+=str1[i]+str2[i];
//      m=i;
//     }

//     while(m<str1.length &&m<str2.length){
//         // if i not equal to 1 string
//         if(m == str1.length && m !==str1.length){
//             // add to first string and increment
//             result+=str1[m];
//             m++;
//         }else{
//             result+=str2[m];
//             m++;
//         }
//     }
//     return result;
// }

// console.log(returnMergeStrings(str1,str2));


// 3 Write an Function take input like this and return the output CurryFunction

// //logic is that
// function sum(a,b){
//     // it is normal function if we have sigle value then
//     if(b !== undefined){
//         return a+b;
//     }
//     else{
//         // Like curryFucntion
//         return function(c){
//             return a+c;
//         }
//     }
// }
 
// console.log(sum(2,4)); //6
// console.log(sum((2)(8))); // curryfunction 6
// // sum(2,4) //Normal
// // sum((2)(4)) //CurryFunction



// 4. create an 3 subarray into single array without Flat
//-->
const arr=[[1,2,3],[4,5,6],[7,8,9]]
// // 1.Flat()
// const v=arr.flat()
// console.log(v);
// 2.spread
// const result=[...arr[0],...arr[1],...arr[2]]
// console.log("spread",result);
// 3.reduce method
// const flatArry=arr.reduce((n,c)=>n.concat(c),[]);
// console.log(flatArry);

// Wihout Inbuilt method manually add with 2 loops
// const result=[];
// for(let i=0;i<arr.length;i++){
//     // Iterating of sub array elements
//     for(let j=0;j<arr[i].length;j++){
//        result[result.length]=arr[i][j];
//     }
// }
// console.log(result)



// Write an fucntion which take a parameters
function abc(a,b,...args){

}
console.log(abc.length);