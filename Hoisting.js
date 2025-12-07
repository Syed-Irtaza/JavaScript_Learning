console.log(a);

var a=6

console.log(a);


// it reads the whole code 
// create its global execution context 
// collect all variables aside in memory phase (declaration)
// assign them undefined 'a' holds undefined   (declaration)
// its time for execution phase
// console.log(a) appears first and 'a' hold undefined 
// so it prints undefined
// then 6 is assigned to a (initialization)
// assigning it the undefined is the concept of hoisting 
// hoisting means lift or rise to the top 


console.log(b);
let b1=10

// The variable b is hoisted, but it is not initialized.
// Trying to access b before its declaration throws a ReferenceError.
// const requires an immediate assignment upon declaration.

// When we say that let and const are hoisted, we mean that their declarations are processed before any code is executed, just like variables declared with var and function declarations. However, unlike var, let and const are not initialized to undefined during the hoisting process. Instead, they remain uninitialized in a "temporal dead zone" (TDZ) from the start of the block until the point where they are declared and initialized in the code.

// During the compilation phase, JavaScript scans the code and hoists declarations for var, let, const, and function declarations to the top of their respective scopes.
// For var, the declaration is hoisted and initialized to undefined.
// For let and const, only the declaration is hoisted, not the initialization.

let b//declared and initialized to undefined by defaulf 
console.log(b);

console.log(c);//c is declared but not initialized either to undefined by default or any other value
let c
