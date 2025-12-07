"use strict"

// let a=new Array(1,2,3)
// console.log(a[-1]);//undefined


// let arr1=[1,2,3,4,5]
// arr1.push(true)//push at the end of the array
// console.log(arr1);
// arr1.push(10,20,"ALI",false) //push multiple elements at the end of the array
// console.log(arr1);

// arr1.pop()//pop from the end of the array can pop multiple time in one line
// console.log(arr1);


// arr1.unshift("IRTAZA",2)// push at the start of the array
// console.log(arr1);

// arr1.shift()
// console.log(arr1.unshift(2));

// console.log(arr1.includes("ALI"));
// console.log(arr1.indexOf(2));


let arr2=[1,2,3,4,5,6,7,8,9]
//console.log(arr2.join());
//console.log(arr2);

//let b=arr2.join()
//console.log(b);
//console.log(typeof b);

//console.log(arr2.slice(-2,-1)); // if negative value : length-negative 
//console.log(arr2);

// console.log(arr2.splice(-2,4));
 // console.log(arr2.splice(4,0));
//  console.log(arr2.splice(4,1));
// console.log(arr2.splice(4,3));
 //console.log(arr2.splice(-4,-1));
// console.log(arr2.splice(-12,3));
// console.log(arr2.splice(2,-4));

// note:
// if source = 0 then print upto n-1
// if source = 1 then print upto n




// both start and end values includes only if start value is not 0, and affect the original array
//remove those values which it shows from the original array
//order maintain krna pry gha
//but destination not be negative (not allowed)
//console.log(arr2);


// Array-2
// let a=[1,2,3,4,5]
// let b=[6,7,8,9,10]
// let c=[11,12,13,14,15]
// let d=[...a,...b,...c]
// console.log(d);

// let c=[1,2,3,[1,2,3],[[[[1,2,3,4,5],[3,3,3]]]]]
// console.log(c);
// let d=c.flat(Infinity)//Infinity means we dont know how much dimensions are originally there so write(infinity)
// console.log(d);

// console.log(Array.isArray(c));//string is not an array


// let name ="Ali"
// let lastName="Syed"
// console.log(Array.from(name));//make character array and dont create array within array work on 1st single argument
// console.log(Array.of(name))//make string array and can create array within array and can take multiple arrgument
// console.log(Array.of(name,lastName));
// console.log(name);
// 'of' and 'from' convert any datatype into array

