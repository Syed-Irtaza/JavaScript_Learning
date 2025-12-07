//"use strict"

// let obj={
//     name:"Ali",
//     age:"12",
//     dataF:function () {
//         //console.log(`My name is ${this.name} and age is ${age}`);//function in object use this to access other keys
//         console.log(`My name is ${this.name} and age is ${this.age}`)
//         console.log(this);  //whole object in current context
//     }
// }
// console.log(obj.dataF());
// obj.dataF()//yeh baad me undefined print ni karaye gha
// obj.name="Goga"
// obj.dataF()

// console.log(this);//empty

// function a() {
//     console.log(this);
// }
// a()// show global object with it default key value pairs

// but if we use "use strict" it treat it as new JS and run it in new Engine E6S
//new ab arrow functions istemal hotay mostly

// function a() {
//     console.log(this);
// }
// a()//now it is undefined
 //const prompt=require("prompt-sync")()

// let a=(a,b)=>(Number(a)+Number(b))
// console.log(a(3,4))
// let a1=prompt("Number1 : ")
// let b1=prompt("Number2 : ")
// console.log(a(a1,b1));

// let obj=()=>({name:"Ali",age:12})
// console.log(obj());

// let obj1=()=>([1,2,3])
// console.log(obj1());


// IIFE  (immediately invoked function Expression) works without "use strict"
// 1. is sy garbage value ni ati
// 2. global use krny ki wajah sy
//use where function call implicitly khud ba khud
// after write the iife must write ; at the end of the iife otherwise usko pata hi ni chly gha k kahan end hona
// (()=>{ // unnamed iife
//     console.log("Hello");
// })();

// (function s(a,b) { //named iife

//     console.log(a+b);
// })(3,4);

//console.log(s(2,1));// error cuz its explicity call


// function name(params) {
//     let a="ali"
//     console.log(this);
// }
// name()


// function name(params) {
//     let a="ali"
//     console.log(this.a);//undefined
// }
// name()

// const c=()=>{
//     let a="Ali"
//     console.log(this);//empty object
// }
// c()



// c=()=>{
//     let a="Ali"
//     console.log(this.a);//undefined
// }
// c()
// console.log(this)//empty object

// function trd() {
//     console.log(arguments);//object contain keys as indexes and values are the arguments passed
// }
// trd(1,2,3,4,5)

// const ar=()=>{
//     console.log(arguments)
// }
// ar(1,2,3)
// see their outputs


// Arrow function allows implicit return means don't need to write the 'return' keyword
//const implicit_return=(num1,num2)=> num1+num2 //return 3+4=7 implicitly
//const implicit_return=(num1,num2)=> (num1+num2) // '()' if we use parenthesis then no need for 'return' keyword
//if '{}' is used then 'return' keyword is must required 
//console.log(implicit_return(3,4));//

//how to return object implicitly in arrow function
//const obj=()=>{username:"Ali"}//incorrect if doing implicit return then wrap it in parenthesis
const obj=()=>({username:"Ali"})
console.log(obj())// { username: 'Ali' }
console.log(obj().username);//Ali