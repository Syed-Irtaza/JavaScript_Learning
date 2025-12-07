"use strict";
const prompt = require("prompt-sync")();
//let a = Number(prompt("Enter the Number : "));

//if else-if
// if (a > 18) {
//   console.log("You are eligible");
// } else if (a < 18) {
//   console.log("not eligible");
// } else {
//   console.log("may be eligible");
// }

//switch statement
// let value = 3;
// switch (value) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Februrary");
//     break;
//   case 3:
//     console.log("March");
//     break;

//   default:
//     console.log("Not a month");
//     break;
// }

// let eligible;
// switch (true) {
//   case a > 18:
//     eligible = true;
//     break;
//   case a < 18:
//     eligible = false;
//     break;
//   default:
//     console.log("Entered wrong age");
//     break;
// }
// switch (eligible) {
//     case true:console.log("Eligible");

//         break;
// case false:
//     console.log("Not Eligible");
//     break
//     default:
//         console.log("May be Eligible");
//         break;
// }

// switch (true) {
//     case 1:{
//         switch (true) {
//             case 2:

//                 break;

//             default:
//                 break;
//         }
//     }
// }

//original syntax of nested switch statements use curly braces after cases like
//case:{switch...}

//                      nested if else-if

// let a = Number(prompt("Enter the number"));
// if (true) {
//   if (a > 10 && a < 20) {
//     console.log("Number is b/w 10-20");
//   } else if (a > 100 && a < 200) {
//     console.log("Number is greater then 100");
//   } else {
//     console.log("I don't know what number it is ");
//   }
// }

// checking is empty or not
// let a=[1,2]
// if(a.length===0){
//     console.log("array is empty");
// }
// else{
//     console.log(`${a} array is not empty`);
// }


// let obj={name:"ALi"}
// if (Object.keys(obj).length===0) {
//     console.log("Object is empty");
// }
// else{
//     console.log(`object ${obj} is not empty and have these key:value pairs ${Object.keys(obj)} and ${Object.values(obj)}`);
// }

// console.log(false==0);//true
// console.log(false===0);//false

// console.log(false=="");//true
// console.log(false==" ");//true special case cuz truthy and falsy values comparison me ni work krti sahi sy
// console.log(false===" ");//false
// console.log(false==NaN);//false
// console.log(10>20>30);



//              nullish coalescing
// let a=undefined??null
// let b=null??undefined
// let c=0??undefined??34
// let d=undefined??null??44??4??5
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// condition part ? if part : else part
// let a=100
// a>10? console.log(true):console.log(false);



