//This method is known as string interpolation
//in which we make place holders '${}' which contains the variable
//let name="Ali"
//console.log(`Hello my name is ${name}`);
//it helps us to add method on the go, like
// console.log(`Hello my name is ${name.toUpperCase()}`);//toUpperCase() is an method 
// let msg =`my name is ${name}`
// console.log(msg)


//another way to declare strings which will be shown as an string object that contain key:value pairs indexes are the keys.
// const gName=new String(`Ali is ${name}`) //${name} will not be showed in inspect of brower(chrome)
// console.log(gName)//Ali is Ali (but not on inspect of browser)
// console.log(gName[0])//A
// console.log(gName.__proto__)//return object which is empty {} but it is not empty its key value pairs can be seen on inspect(console) of browser
// console.log(gName.charAt(7)); //show the character at given index/position
// console.log(gName.indexOf("A"));//show the index/position of the given character
// console.log(typeof(gName)) //object

//reason : actually gName is the instance of String object which means
//it is the object wrapper around the primitive string that's why it shows typeof gName as object

//Name="ALi"
//on the other hand Name is the primitive value itself not a object wrapper like gName
//and typeof Name is string
// console.log(Name.charAt(3));
// console.log(Name.indexOf('E'));
// console.log(gName===Name);//false becuz : typeof gName is object and Name is string







//  let a = new String ("Ahmed")
//  let b= a.toUpperCase()
//  console.log(a);// output : [String: 'Ahmed']
//  console.log(b);// output : AHMED

// let a= "Ali"
// let b = a
// let c= a.toUpperCase()
// console.log (c) // output : ALI 
// console.log(b) // output : Ali
// console.log(a) // output : Ali


//there are variety of string methods a.k.a functions that works on strings

Name="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(Name.substring(16,10))//it itself checks which is start-index (greater number) and which is end-index (smaller number)
//in substring() order doesn't matter
//substrict() can take only one negative value as an argument which is consider as 0 index (a.k.a smaller index)
//substring() can also take one argument and it create substring starting from that
//given index and goes to end
// //console.log(Name.substring(2))

// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.



//slice() can take both negative arguments
//if value is negative then length of string - negative value = if smaller then start index 
//otherwise greater
//order must be maintain in slice() (first smaller(start-index) , second-greater(end-index) )

let another_str="    ALI Irtaza   "
console.log(another_str.trim());//remove whitespaces from the end and from the start
//trimEnd used to remove spaces from the end only of the string
//trimStart used to remove spaces from the start only of the string
let nn = "ALI IRTAZA"
console.log(nn.includes("f"));

console.log(nn.replace("A","a"));//output : aLI IRTAZA
console.log(nn.replace(/A/g,"a"));// replaced all the A's with a's
console.log(nn.replace("ALI","Hassan"));//output : Hassan IRTAZA

console.log(nn.split("I"));

let ali="Ali"
console.log(ali+5);//Ali5
console.log(ali-5);//NaN
