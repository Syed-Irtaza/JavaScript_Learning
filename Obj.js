// let a={
//     name:"Ali",
//     age:19,
//     hi:{
//         sex:"F"
//     }
// }//literal non single term method

// console.log(a);

// let b=Object.create(
//     {
//     name:"Ali",age:19,
// }
// )//constructor single term method
// console.log(b);

// console.log(b["name"]);
// console.log(a["name"]);
// console.log(a.age);
// console.log(a.age);
// console.log(a.hi.sex);

// console.log(a["age"]);

//emding symbol in object
// let c=Symbol("SN")
// let d=Symbol("")
// let b={
//     name:"ALI",
//     [c]:"ALI",
//     [d]:123,
//     1:"ali"
// }
// console.log(b.true);//number type key is not accessible by dot operator
// console.log(b[c]);//symbol are accessible using square brackets with the colons
// console.log(b[d]);
// console.log(typeof b[c]);//data type of its value
// console.log(typeof b[d]);//data type of its value

// let a={
//     name:"Ali",
//     age:21,
//     email:"huh@gmail.com"
// }
// // we can change the values of the keys
// a.name="Irtaza"
// console.log(a);

// //we can add new keys:values in object
// a.sex="Male"
// console.log(a);

// Object.freeze(a)//now Object a is immutable kind of const values
// a.name="Hassan"
// console.log(a);

//objects in array
// let v=[
//     {name:"Ali"},
//     {gender:"M"},
//     {age:21,
//         hieght:5
//     }
// ]
// console.log(v[0]);
// console.log(v[1].gender);
// console.log(v[2].hieght);

//functions in objects
// let s={
//     salam:function() {
//         console.log("Salam o Laikum");
//     }
// }
// console.log(s);
// console.log(s.salam)
// console.log(s.salam())
// console.log(s["salam"]()) //paranthesis will convert to string it we write it in double cotations

// let f={
//     name:"Ali",
//     age:21
// }
// f.msg=`My name is ${f.name} and age is ${f.age}`
// console.log(f);

// //this works only on in functions
// f.greeting=function(){
//     console.log(`My name is ${this.name} and age is ${this.age}`)
// }

// console.log(f.greeting());

// let a=`My age is ${f.age}`
// console.log(a);

// let num=02;//syntax error but do print
// console.log(num);//2

// OBJECT part-2

//  another method to declare and initialize an object
// let a={}
// a.name="ALi"
// a.age=32
// console.log(a);

// let obj = {
//   name: "Ali",
//   DOB: {
//     date: {
//       day: "Monday",
//       month: "june",
//       a: 21,
//     },
//   },
// };
// console.log(obj.DOB.date.day);
// console.log(obj?.DOB?.date?.day);//optional chaining use when we use API's or Database
// console.log(obj?.DOB?.date?.dayy);//output : undefined


// joining of objects
// let a={name:"Ali",age:21}
// let name=Symbol("")
// let age=Symbol("")
// let b={[name]:"Ahmed",[age]:53}
// let c=(a,b)
// console.log(c);
// let c1=Object.assign({},a,b)//(target,source1,source2)
// console.log(c1);
// let c2={...a,...b}
// console.log(c2);

// let a={name:"Ali",age:21}
// let b={[name]:"Ahmed",[age]:53}
// let c=(a,b)
// console.log(c);
// let c1=Object.assign({},a,b)//(target,source1,source2)
// console.log(c1);
// let c2={...a,...b}
// console.log(c2);

// let ob={name:"Ali",
//     education:"BSCS",
//     age:21
// }
//console.log(Object.keys(ob));//print keys only
//console.log(Object.values(ob));//print values only
//console.log(Object.entries(ob));//print an array that contains an arrays of key : value pairs separately
//console.log(Object.hasOwnProperty("name"));//true or false if key exist or not


// Object de-structure

// let obj={name:"Ali",
//     phone:3454065103,
//     address:"KSK"
// }

// let {name,phone,address}=obj
// console.log(name);
// we can also add alias
// let {name:n,phone:p,address:ad}=obj
// console.log(n);
// console.log(name);//error: cuz we added alias then if we access original props with their identifier then error yani alias sy hi krna if use alias


//object without de-structure

// let name1=obj.name
// console.log(name1);

// //JSON
// {
//     "name":"ALi",
//     "education":"BSCS"
// }

// function sumarr(...num) {
//     let sum=0
//     for(let i of num)
//         sum=sum+i
//     return sum
// }
// console.log(sumarr(5,10,15));