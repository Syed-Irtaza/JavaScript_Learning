"use strict"

// //global scope variables
// let a=5
// var c=7
let d=65
let dil="Allah"
name()
function name(params) {
    if(dil==="Allah")
        console.log("true");
        
}

if(true){
//     let a=6 //local variable
//     let b=6
    // console.log(a);//6

//     var c=8
//     console.log(c);//8

   console.log(d);//accessing local variable locally
//     const d=19
//     console.log(d);// now d is a local const

}
// console.log(d);//this d is global wala const
// console.log(c);//8 cuz var dont support block scope functionality
// //console.log(a);//5
// //console.log(b);//accessing local variable out of the scope or globally


// mini - hoisting

// if(true){
//     let global=72
//     if(true){
//         console.log(global);//accessing global locally
//         let local=5
//     }
//    // console.log(local); // ReferenceError: local is not defined
// }

// function outer() {
//     let global=3
//     function inner() {
//         let local=45
//         console.log(local);
//         console.log(global);
//     }
//     //console.log(local);//reference error
//     inner()
// }
// outer()
