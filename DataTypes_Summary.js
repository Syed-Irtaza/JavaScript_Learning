//  === Primitive DataTypes ===
// 1. string
// 2. numbers(float,double,negative => inshort all types numbers)
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (for uniqueness)



const id=Symbol('555')
const anotherid=Symbol('555')
console.log(typeof id)
// id and anotherid are two different unique symbols
// console.log(id===anotherid);//output: false
// console.log(id==anotherid);//output: false
//reason: either type is same but it doesn't return the same value becuz names of constants are different so Symbol()[method] return unique symbol(is an datatype) value, to maintain the uniqueness

//   === Non-primitive DateTypes ===
// 1. Arrays
// 2. Objects
// 3. Functions 

// const myarray=["Ali","Irtaza"]

// const myfunc=function(){
//     return "hello world"
// }
// const myObj={
//     name:"Ali",
//     age:21, gender:"Male",
// }

// Note: JS is dynamically typed programing langauge which means variables/constants can have values of different type during runtime 
//e.g. const num=100 or const num=true JS sense the type of num by itself on runtime either it is number or boolean .. etc


// console.log(typeof myarray);
// console.log(typeof myObj);
// console.log(typeof myfunc);
// const Bnum=9999243444494444n //declaring and initializing bigint



//  primitive use stack and generate copy which have no effect on the myName as myNewName has different space in memory which allocated from stack
let myName="Ali"
let myNewName=myName

// console.log(myname)
// console.log(mynewname);

myNewName="Irtaza"


console.log(myName)
console.log(myNewName);


//  Non primitive use heap
let user1={location:"Riaz Ahmed Road"} // it goes in heap or its space is allocated from the heap
let user2=user1//now at this point no new memory is created infact reference is generated from the heap so both user1 and user2 pointing at the same memory location in the memory(heap)
user2.location="Sukh nahar"
console.log(user1.location);
console.log(user2.location);
