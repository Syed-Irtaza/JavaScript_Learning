// console.log("2">0)
// console.log("2">=2);

// console.log(null<0);//0<0
//console.log(null==0);//undefined==0,null==undefined (by type coerison and convert the null into undefined)
// console.log(null<=0);//0<=0 //true
// //note: <,>,<=,>= converts the null into 0


console.log(undefined===null)//by type coerison and convert the null into undefined
// console.log(1=="1")

// console.log(undefined==0)//output: fasle
// console.log(undefined>=0)//output: false
// console.log(undefined<=0)//output: false

//         BUT AVOID THESE TYPES OF Comparisons             

//  Strict Equality check
//checks data type before conversion and value both 



//note: string to number converion is more straigthforward and reliable then 
//converting a number into string leads to ambogiousness while using '==' operator