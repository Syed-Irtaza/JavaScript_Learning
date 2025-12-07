"use strict";
const prompt=require("prompt-sync")()
// function sting() {
//     return "ali"
// }
// function sting2(name) {
//     return name
// }
// function sting3() {
//     console.log("Ali");
// }
// sting()//reference in value
// sting//reference in value
// sting2("Ali")//reference in value
// console.log(sting());//print on console after complete execution
// console.log(sting2("Ali"))//print on console after complete execution
// // console.log(sting3());;//print on console after complete execution

// let b=function a() {
//     console.log("Ali");
// }
// console.log(a());//error a not defined

// console.log(a());//error a not defined
// let b=function a() {
//     console.log("Ali");
// }

// console.log(b());//Cannot access 'b' before initialization
// let b=function a() {
//     console.log("Ali");
// }

// let b = function a() {
//   console.log("Ali");
// };
// console.log(b()); //output: Ali


// Add two numbers
// function addsumm(num1,num2) { //num1 and num2 are parameters
//     return num1+num2
// }
// console.log(addsumm(5,4));//5,4 are arguments
// // now take numbers (inout) from user

// let a = prompt("Enter number 1 ")
// let b=prompt("Enter number 2 ")
// //take input as a string
// console.log(a+b);//output: 54

// let a1=Number(prompt("Enter num 1 "))//converted input into number
// let b1=Number(prompt("Enter num 2 "))//converted input into number
// console.log(addsumm(a1,b1));


// function name(name1) {
//     return `my name is ${name1}`
// }
// let a=prompt("Enter your name ")
// console.log(name(a));
// console.log("");
// console.log(name("Ali Irtaza Hassan"));
// console.log(name(""));//my name is 
// console.log(name());//my name is undefined

// function str(name) {
//     if(name===undefined){ //if(!name) !name is same to name===undefined 
//         console.log("Please Enter your Name ");
//         return 
//     }
//     return `Your name is ${name}`
// }

// let b = prompt("Enter the name ")
// console.log(str(""));//output : Your name is 
// console.log(str(+""));//output : Your name is 0
// console.log(str());//output : Please Enter your Name undefined
// console.log(str(b));//output : Your name is      (if you enter nothing)
// console.log(str(b));

//calling a function which returns another function in JS this concept is known as 
//(function currying), that inner function has complete access to the variables and functionality
//of outer function
// let v=function s(){
//     return function name() {
//         return "Hello World"
//     }
// }
// const f=v();
// console.log(f(34,"Ali"));


// let func=function() {
//     let funct2=function(){
//         console.log("Hello");
//     }
//     return funct2 //returning inner function directly
// }

// console.log(func()());//calling the inner function immediately after calling the outer function
// // this known as immediate calling



let func=function() {
    let funct2=function(){
        console.log("Hello");
        
    }
    let value=55

    let fuc3=function() {
        console.log("Hello World");
    }
    return {funct2,value,fuc3}//returning the object allows you to return or expose the function's properties more than one
}

let result=func()
console.log(result());//error result is not a function so don't add ()

instead
console.log(result.funct2());
console.log(result.value);
console.log(result.fuc3());//or
console.log(func().fuc3());

//agr hum function mein khuch return na kry then wo by default undefined show kry gha after agr 
//function me koi piece of code hai usko execute krny k baad
// return nothing is equal to not writing an return statement

//console.log("2"*2);//4

// function sum(...num) {
//     let sum=0
//     let iteC=0
//     for (let i of num){
//         sum=sum+i
//         iteC++
//     }
//     return {sum,iteC}
// }
// console.log(sum(5,5,5));
// console.log(sum(5,5,5).iteC);
// console.log(sum(5,5,5).sum);


// function b(v1,v2,...num) {
//         return num
// }

// console.log(b(1,2,3,4,5,6));//v1=1,v2=2 and num = 3,4,5,6

// let user={
//     email:"syedaliirtazahassan@gmail.com",
//     pass:"123345"
// }
// function log(aniobj) {
//     console.log(`This is my email ${aniobj.email} and password ${aniobj.pass}`);
// }
// log(user)//just call the function
// console.log(log(user));// call + shows what functions return

// log({
//     email:"Ali",
//     pass:"555"
// })

// user={
//     email:"3"
// }
// log(user)


// let arr=[1,2,3,4,5]
// function ar(array) {
//     return array
// }

// console.log(ar([5,10,15]));
// console.log(ar(arr));
// console.log(ar(arr[3]));
// console.log(ar(arr[18]));


