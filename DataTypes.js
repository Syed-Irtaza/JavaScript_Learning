"use strict"; // treat all the JavaScript code as newer version

// alert("hello") or alert(5+5)   note: not possible becuz we r using nodejs, not browser

//console.log(3+3) console.log("hi")   error without semi-colon(spacing method/technique)

//console.log(3+3); console.log("hi")  no error but not a good practice(code readablity ka masla)

//console.log(3
//+3);  acceptable but bad mannaer affect the code readability

// simple banday ka putr ban k kro means code readability must be high

// -----Data Types----
let isLogged=true;
let num = 123;
let name = "Ali Irtaza";
//---Primitive DTs
//numbers range from 2^53-1 to -(2^53-1)
//bigint -> represent larger numbers
//string -> ""
//boolean -> true/false
//null -> standalone value (represent emptiness)
//symbol -> uniqueness (use mostly in react)
//undefined 

//---Non Primitive DTs
//object

console.log(typeof "Irtaza")//output: string
console.log(typeof num)//output: number
console.log(typeof null)//output: object(historical bug) null is an object but it is primitive which represents absence of any object value
console.log(typeof undefined)//output: undefined so undefined is an type

