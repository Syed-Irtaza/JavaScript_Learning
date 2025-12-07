// for of (arrays and objects)
// for in
// for each

//                    // for of loop
// let a=[1,2,3,4,6]
// for(let i of a){
//     console.log(i);
// }

// let v="321abc"
// for(let i of v){
//     console.log(i);
// }

// let str="Ali is a good boy"
// for(let i of str){
//     if(i==" ")
//         continue
//     console.log(i);
// }

//MAP
// let mp = new Map();
// mp.set("name", "Ali"); //take only one key:value pair
// console.log(mp); // Map(1) { 'name' => 'Ali' }
// mp.set("age", 29);
// mp.set("age", 29);
// console.log(mp);
// for (let [key, value] of mp) {
//   console.log(key, value);
// }

// for (let [key] of mp) {
//   console.log(key);
// }

// for (let [, value] of mp) {
//   console.log(value);
// }

//Map(1) , Map(2) the 1 and 2 tells about the number of key:value pairs in the map

// for in loop (works on objects)
let obj={
    name:"Ali",
    age:23,
    education:"BSCS"
}

for (let i in obj){
    //console.log(i);//print only keys
    //console.log(obj[i]);//print only values
    
    //if both are collective then key:value mein print hoga
    //  console.log(i);
    // console.log(obj[i]);

    // console.log(`${i} :- ${obj[i]}`);
   
}

 //For Each work on sab pr but object py directly ni lgta

//  let a=[1,2,3,4,5]
//  a.forEach((i)=>{
//     console.log(i);// 1 2 3 4 5
//     console.log(a[i]);// 2 to 5 and undefined
//  })


//  let a1={
//     name:"Ali"
//  }

//  Object.keys(a1).forEach(function(key){
//     console.log(`key: ${key} and value: ${a1[key]}`);
//  })

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
// .filter(num => num % 2 !== 0) // [1, 3, 5]
// .map(num => num * num)       // [1, 9, 25]
// .reduce((acc, num) => acc + num, 0); // 35
// console.log(result); // 35

// .map .filter .reduce .forEach are the higher order array loops
//beacuse they take call back functions as arguments
// call back functions are those functions jinka naam ni hota like

// function(){}
//()=>{}

// arrays of objects
// let obj2=[
//     {name:"Ali"},{age:21},{name:"Ahmed"}
// ]
// obj2.forEach((i)=>{
//     // console.log(i);
//     console.log(i.age);
// })

// we can't hold forEach in a variable 

//let c = obj2.forEach((i)=>{
//console.log(i);
//console.log(i.age);
// })


//.filter filter the array depending on the condition provided
let a=[1,2,3,4,5,6,7,8,9,10]
// let b=[]
// a.forEach((i)=>{
//     if (i%2==0) {
//         b.push(i)
//     }
// })

// console.log(b);


//filter can be store in variable, and return values which satisfy condition works on true or false of condition 
// let objj=[{
//     name:"Ishaq"
// },
// {
//     name:"Mehmood",
//     age:55
// },
// {
//     name:"Mehmood",
//     age:45

// }]

// let fil=objj.filter((i)=>{
//     return i.name=="Mehmood"&&i.age==45
// })
// console.log(fil);

// let filt=a.filter((i)=>{
//     return i%2==0
// })
// console.log(filt);

// let mp=a.map((i)=>{
//     return i%2==0
// })
// console.log(mp);


// let mp1=a.map((i)=>{
//     return i*2
// })
// console.log(mp1);

// let filt=a.filter((i)=>{
//     return i*2
// })
// console.log(filt);

// .map gives the true or false after assessing the values which gives true or false 
// so it is use for mathematical ops

//.filter gives the values which satisfy the condtion
// use for filteration


//chaining method
//when we use two or more higher order array loops like forEach,mao,filter
// let chain=a
//     .map((i)=>(i*2))
//     .map((i)=>(i+50))
//     .filter((i)=>(i>50))
// console.log(chain);


//.reduce is widely used in  e-commerce, shopping cards, online banking,
//use to calculate total current sum
//reduce((a,b)) a=accumlator or initial value b=current value

// let red=a.reduce((a,b)=>{
//     return a+b
// },0)//here 0 is the inital value of a
// console.log(red);

// //reduce is just like sum=0 and sum=sum+i



// let a3=[
//     {name:"Ali",age:21},{name:"Ali",age:22},{name:"Ali",age:24},{name:"Ali",age:25}
// ]
// let b=a3.reduce((i,j)=>{
//     return i+j.age
// },2)
// console.log(b);


//reduce show sum

let sp_cart=[1,2,3,4,5,6,7,8,9,10]
function a5(...num) {
    let sum=0
    for(let i of num){
        sum=sum+i
    }
    return sum
}
console.log(a5(1,2,3,4,5));

let v=sp_cart.reduce((i,j)=>(i+j),0)
console.log(v);
