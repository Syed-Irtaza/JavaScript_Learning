let num1=108
let num2=108.12
console.log(num1.toFixed(2));//it will simply place or write zeros after placing point in the value (jtny argument me numbers honge utny zeros)
console.log(num2.toFixed(2));//108.12 // idhr zero ni cuz point already aur us k bad 2 values already hain
console.log(num2.toFixed(3));//108.120

console.log(num1.toPrecision(2));//1.1e+2 ... it simply place float point upto given number 1.1X10^2

let num3=1012560789
console.log(num3.toLocaleString());//US and PAK format
console.log(num3.toLocaleString('en-IN'));//Indian format of counting numbers
console.log(num3.toLocaleString('ur-PK'));//Pakistani format of counting numbers

let a=num3.toString()//we convert num to string to implement string methods
console.log(a.length);//10 

//        --- MATHS ---
let num4=-12
console.log(Math.abs(num4));// answer is in string type abs() convert -ve numbers into +ve
let num5=12.8
console.log(Math.round(num5));//nearest round-off
let num6=12.0000001
console.log(Math.ceil(num6));//ceil() convert the number one greater or next number if the number increase slitely
let num7 =12.9999
console.log(Math.floor(num7));// floor() is reverse of ceil()

let arn=[1,2,3,10]
console.log(Math.max(...arn));
console.log(Math.min(...arn));

let arn1=[1,2,"d",10]
console.log(Math.max(...arn1));//NaN
console.log(Math.min(...arn1));//NaN

let arn2=[1,2,"12",10]
console.log(Math.max(...arn2));//12
console.log(Math.min(...arn2));//1

let min =1
let max=100
console.log(Math.floor(Math.random()*(max-min+1)+min));


