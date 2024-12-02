// // create an Pattern star using For loop


// // function Pattern(){
// //     let start='';
// //    let num=1;
// //     for (let i=1;i<=4;i++){
// //         for(let j=1;j<=4;j++){
// //          start +=(num < 10 ? ' ' :' ')+ num +' ';
// //          num++;
// //         }
// //         start+='\n';
// //     }
// //     return start;
// // }

// // console.log(Pattern());
// // output:
// //  1 2 3 4
// //  5 6 7 8
// //  9 10 11 12
// //  13 14 15 16

// // **************************************************************************//
// // function DisplayChar(){
// //   let Chars='';
// //   let ASCII=65;

// //   for(let i=1;i<=5;i++){
// //       for(let j=1;j<=5;j++){
// //       Chars+=String.fromCharCode(ASCII)+' ';
// //       ASCII++;
// //       }
// //        Chars+='\n';
// //   }
// //   return Chars;
    
// // }

// // console.log(DisplayChar());

// // **************************************************************************//
// // this function will return Border Ractanle.
// // function borderPattern() {
// //     let border = '';

// //     for (let i = 0; i < 5; i++) {
// //         for (let j = 0; j < 5; j++) {
// // //             if (i === 0 || i === 4 || j === 0 || j === 4) {
// // //                 border += '* ';
// // //             } else {
// // //                 border += '  '; // Add two spaces to match the alignment with '* '
// // //             }
// // //         }
// // //         border += '\n'; // Add a new line at the end of each row
// // //     }

// // //     return border;
// // // }

// // console.log(borderPattern());


// // **************************************************************************//

// function rightAnglePattern(){

//     let pat = '';

//     for(let i=0;i < 6;i++){
//         for(let j=0;j< i;j++){
//             pat += '* ';
//         }
//         pat+= '\n';
//     }
//     return pat;
// }
// console.log(rightAnglePattern());

// // **************************************************************************//

// function DownwordAngle(){

//     let pat='';
//     for(let i=0;i < 5;i++){
//         for(let j=i;j< 5;j++){
//            pat+= '* ';
//         }
//         pat+='\n';
//     }
//     return pat;
// }
// console.log(DownwordAngle());

// // **************************************************************************//

// function rightAngle(){
//     let pat='';
//     for(let i=0;i < 5;i++){
//         for(let j=0;j< 5-i;j++){
//            pat+=' ';
//         }
//         for(let k=0;k< i;k++){
//             pat+= '*';
//         }
//         pat+= '\n';
//     }
//     return pat;
// }
// console.log(rightAngle());

// // **************************************************************************//
// function DownRightAngle(){
//     let pat='';
//     for(let i=0;i < 5;i++){
//         for(let j=0;j< 5-i;j++){
//            pat+='*';
//         }
//         for(let k=0;k<i;k++){
//             pat+= ' ';
//         }
//         pat+= '\n';
//     }
//     return pat;
// }
// console.log(DownRightAngle());
// // **************************************************************************//


// // **************************************************************************//


// // let arr=[11,13,15,78,90,20];

// // ALL method on methods on Array..
// // arr.pop();
// // console.log(arr);
// // arr.push(80);
// // console.log(arr);
// // console.log(arr.length);
// // let str=arr.toString();
// // // console.log(str);
// // arr.join('90');
// // console.log(arr);
// // console.log("1-2-3".split("-"));

// // Main difference between both methods is to MAP did't get any condition for displaying output. 
// // arr.map((key)=>{console.log(key*2)});
// // Both we are using at single logic
// // let cos=arr.map((i)=>{return i+2}).filter((k)=>k%2===0);
// // console.log('After Using both method at single '+cos);


// // //USE for in/of 
// // for(let i of arr){
// //     console.log(i);
// // }

// // let arr=[
// //     ['name',20],//0
// //     ['age',56,'khoolo'], //1
// //     ['address','link',0] //2
// // ];

// // console.log(arr[1][2]);


// // USE spread method for copying an array
// // let arr1=[11,13,15,78,90,20];
// // let arr2=[...arr1];
// // let third=[...arr1,...arr2];


// // console.log(arr1 === arr2);
// // console.log(third);

// // this is ARRAY distructing means assign each value in list at single varible
// // let list=['AJAY','SACHINE','VAIBHAV','NIKHIL'];

// // let [item1, item2 ,item3,item4]=list;
// // console.log(item1);
// // console.log(item2);
// // console.log(item3);
// // console.log(item4);


// // IMP question  Make this ARRAY Empty in 5 different ways.
// // let list=['AJAY','SACHINE','VAIBHAV','NIKHIL'];
// // Solution-->

// // Ways  1. length =0
// // list.length=0;
// // console.log(list);

// // Ways  2. splice method
// //   list.splice(0,list.length);
// //   console.log(list);

// // Ways  3. Empty  array assign
// //   list=[]
// //   console.log(list); 

// // Ways  4. Using POP method
// // while(list.length > 0){
// //   list.pop();
// // }
// // console.log(list);

// // Ways  5. Using SHIFT method
// //  while (list.length > 0) {
// //      list.shift();
// //  }



// // Create an object and access its single property at time

// // let my_obj={
// //    name:'This Object',
// //    behaviour:'flexible',
// //    Number:20,
// //    Avg:80.56,
// //    'Proof-of-work':'Great',
// // };

// // console.log(my_obj['Proof-of-work']);
// // delete my_obj.behaviour;
// // console.log(my_obj);


// // printing FACTORIAL in range
// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// // function getFacto(num){
// //     let arr=[];
// //     for(let k=1;k<=num;k++){
// //       let fact=1;
// //     for(let i=1;i<=k;i++){
// //         fact*=i;
// //      }
// //      arr.push(fact);
// //     }
// //     return arr;
// // }
// // console.log(getFacto(10))




// // Pyramid uppr & lowr

// function uppr(){
//     let num=5;
//     for(let i=1;i<=num;i++){
//         // spaces
//         for(let j=1;j<=num-1;j++){
//           num+=' ';
//         }
//         // star's
//         for(let j=1;j<=2*i-1;i++){
//             num+='*';
//         }
//         // spaces
//         for(let j=1;j<=num-1;j++){
//             num+=' ';
//           }
//          num+='\n';
//     }
// }

// console.log(uppr());




// // Call Method is method which belong to other OBJECET


// var people={
//     fullName:function(percentage,grade){
//         return this.fi_name+" "+this.la_name+" -> "+percentage+" ->"+grade;
//     }
// }

// var fullName={
//     fi_name:"future Billionair",
//     la_name:"Mutli",
// }

// console.log(people.fullName.call(fullName,90,3));




// Apply Method is similar to Call , accepts parameter as array.

// var applyMethod={
   
//   Apply:function(doller,place){
//       return this.property +" I know that."+this.bio+" "+doller+" "+place;
//   }
// }

// var Apply={
//     property:"Im Great..",
//     bio:"I will definately QUANQUR to these WORLD ONE day..",
// }


// console.log(applyMethod.Apply.apply(Apply,["$5 Billion", "Whole World"]));



// Blind Method 

// var useBlind={
   
//     Blind:function(proud,happy){
//          return this.myVision+" INSHAALLAHH.. I WILL "+this.perspective+""+proud+" "+happy;
//     }
// }

// var Blind={
//      myVision:"Mine Eyes are weak but I will definately get my vision BACK..",
//      perspective:"To win whole world Give to MOM & DAD what ever They want's.",
// }

// var newSms=useBlind.Blind.bind(Blind);

// console.log(newSms("Make my parent PROUD ","& HAPPY also"));