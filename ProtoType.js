// ProtoType of JS
// Array,String,Functions(child) --> Object(parent,grandparents) --> NULL(until null is found)


//prove that functions is also an object

// function sum(num) {
//     return num*5
// }
// console.log(sum(5));

// sum.hello="BYE"
// console.log(sum.hello);//we add new key:value pair in the function jab k aisa kam tou object me hota hai
// // so functions shows object and functional behaviour both
// function createUser(Username,age){
//     this.Username=Username
//     this.age=age
// }

// createUser.prototype.increment=function(){
//     console.log(`${++this.age}`);
// }

// let a = new createUser("ahmed",20)
// console.log(a.increment())

// // protoType means properties of the object or the another object or it can inherit the other's object props and can have their own props
// // new creates new object and connect the built-in and defined props to that object


// let str="Hello"
// let obj={
//     name:"ALi",
//     Sex:"Female"
// }

// Object.prototype.n=function(){// Object ki jagha Array and String bhi a skta but us k liye array aur string ka hona zaroori
//     //plus agr Object likha hwya aur access usko array ya string k sth kr rhy 
//     // tou theek hai yes hai kam
//     console.log("Salam");
    
// }
// obj.n()
// str.n()


//inheritance
//old way

// let a={
//     f_name:"Ali"
// }
// let b={
//     name:"Irtaza",
//     __proto__:a
// }

// console.log(b);
// console.log(b.f_name);



// new tarika

// let a={
//     f_name:"Ali"
// }
// let b={
//     name:"Irtaza",
// }
// Object.setPrototypeOf(b,a)//(child,parent)
// console.log(b);
// console.log(b.f_name);
