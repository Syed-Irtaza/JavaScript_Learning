"use strict"
//Converion Into Numbers
let num=25
console.log(typeof num)//output: number
console.log(typeof(num))//output: number

//now convert string into num by using class of number data Type "Number"
let num2="25abc"
console.log(typeof num2)//output: string
let ValueInNumber=Number(num2)//converted string into number (jo k isko converion ni krni chaye thi bcuz "25abc" is not a number) so there are issues in JS
console.log(typeof ValueInNumber)//output: number 
console.log(ValueInNumber)//output: NaN


let num3=null
ValueInNumber=Number(num3)
console.log(typeof ValueInNumber)//output: number
console.log(ValueInNumber)//output: 0

let num4=undefined
ValueInNumber=Number(num4)
console.log(typeof ValueInNumber)//output: number
console.log(ValueInNumber)//output: NaN(Not a Number)

let num5="Irtaza"
ValueInNumber=Number(num5)
console.log(typeof ValueInNumber)//output: number
console.log(ValueInNumber)//output: NaN

//for (true), number is 1 and 0 for false
let num6=true;
let numis=Number(num6)
console.log(numis)
console.log(typeof numis)

//Number() is an object that represents a number of any kind.
// All JavaScript numbers are 64-bit floating-point numbers.



//Conversion into Boolean

let ThisBool=undefined
let Isbool=Boolean(ThisBool)//conversion into Boolean true/false
console.log(typeof Isbool)//boolean
console.log(Isbool)//true

//it is true for any positive and negative number
//it is  false if number is 0 or if string is empty or for null and for undefined

let someNum=undefined
let stringIs=String(someNum)
console.log(typeof stringIs)//conversion into string
console.log(stringIs)// anything will be converted into string and displayed on screen e.g. undefined,null,25,true,false
 