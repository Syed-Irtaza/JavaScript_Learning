// // how to create promises
// // promises are the (objects) representing the eventual completion or failure 
// const Promise1=new Promise(function(resolve,reject) {
//     //Do an async task
//     //DB calls(inject,receive etc), cryptography(encode,decode), network calls  
//       setTimeout(function(){
//           console.log("Async Task is Done");
//           resolve()//means it's time to be consumed or to be executed
//           //plus is resolve() ko upar kro ya nichy kro phly Asynch task hi chalay gha
//       },1000)// excute this function after one second ... here seconds are in milliseconds

// })//promise ka instance means new object is created

// // why we use async programming cuz we want to do multiple things at once like DB sy connection banao tab tk mein khuch aur kam kr lyta hon

// //in past we use libraries like Q and blueBird to do fetch() wala kam but ab nahi cuz ab fetch() ki built-in support mil rhi hai boss native support in nodeJS
// // old libraries are available on git-hub


// // time to consume the promise
// Promise1.then(function(){
//     console.log("Promise Cosumed/resolved");
    
// })//.then() is connected to resolve
// //then()have callback function which receive the argument by default
// //this call-back function of then receive by default argument jis me promise k andar jo kam hwya hota uski return value hoti
// // but "Promise Consumed" tou aya hi ni cuz promise consume ni hwya theek sy then aur resolve ka relation ni bana 
// // so use resolve() method in promise for connection


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
        
//     },5000)
// }).then(function(){
//     console.log("Promise 2 Consumed/resolved");
    
// })//ab yeh promise khuch bhi kr rha ho like DB la rha ho , network calls kr rha hon etc ...



// const promise3=new Promise(function(resolve,reject){
//     //may be ab promise humara koi x amount of data la rha ho usko kaisy consumed krna
//     setTimeout(function(){
//         // now pass data values from here to .... 
//         //there in then call-back functions
//         //it is also done by resolve()
//         resolve({name:"Ali",Sex:"Male"})//mostly objects hi pass hotay
//         //so resolve data to send kr rha as a parameter to the call-back function of then
//     },2000)
// })

// promise3.then(function(user){
//     //... there
//     //now how to connect data 
//     // as we now then and resolve are connected so data tou aye gha
//     console.log(user);
//     console.log(user.Sex);
    
// })

// const promise4=new Promise(function(resolve,reject){
    // setTimeout(function(){
        //using error cuz file mili ya ni, detect it and tell the status
//         let error=false//error not exits if false
//         if(!error){
//             resolve({user:"Irtaza",age:21})//send the content of file to be consumed

//         }
//         else{
//             reject("ERROR: something went wrong")//it throw the error
//             error=true//error exists if true
//         }
//     },1000)
// })
//catch() is used to catch the error if exist means if then()  me value get krny me error ata
//catch() mein bhi ek call-back function aye gha to get values if error 
 
//how to be avoid from call-back hell means functions mein functions un me functions so on....
// so is liye there is not only one then() aur catch() 
// promise4.then((file_data)=>{
    //console.log(file_data.age);
    // return file_data.user//ab yeh value return ho k kisi variable me ni ja rhi if u try there is an error
    //so do chaining jo upr then() me return hoga wo nichy walay then( ) me aye gha
// })
// .then((name)=>{
//     console.log(name);
    
// })
// .catch(function(error){//it catches the error if there is one and print the string inside the reject()
//     console.log(error);//print the string which is in reject() if there is an error
    
// })
// .finally(()=>console.log("Promise is either resolved or rejected"))//final msg to the user k jo kam yani k promise wo kra rha tha wo resolve gya ya error a gya us me 
// means something has been done (khuch na khuch tou hwya hai )
// kind of default statement jo promise resolve ya reject hwya ya ni us k baad ati
//catch() is connected with the reject()


// const promise5=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true//error not exits if false
//                 if(!error){
//                     resolve({user:"Irtaza the JS Developer",age:21})//send the content of file to be consumed
        
//                 }
//                 else{
//                     reject("ERROR: Irtaza JS went wrong")//it throw the error
//                     error=true//error exists if true
//                 } 
//     }, 1000);
// })
// promise kia hai ... an operation which will take place in near 
// tou yeh then catch finally wala kam promise ko consume krna hum another tarikay sy bhi kr skty hn
// async function consumeP5() {
    //const responseHandle=await promise5//promise is an eventual completion object
    // but there is issue in async await like if there is an error while connecting the database or some other error tou yeh
    // us ko entertain ni krta
    // because it doesn't wrapped in try-catch block
    // we are handling it direct and suppose kr rhy hn jb bhi promise resolve hoga 
    // to value aye ghi hi aye ghi
    //console.log(responseHandle);
    
    // so now handle the error gracefully
    // let's do it

//      try {
//         const resp=await promise5
//         console.log(resp);
        
//      } catch (error) {
//         console.log(error);
        
//      }
// }
// consumeP5() 

// old tarika using try-catch method
// async function getHafiz() {
//     try {
//         const res=await fetch('https://api.github.com/users/Ahmed-129')
//         console.log(res);
//         const data=await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
//   }
 
// getHafiz()


// async-await-fetch with try-catch is old method
// promise khud banana aur usko consume hum nay upr kia sb sy
// .then() and .catch() ki jagah try-catch ko use kiya in async-await function


// latest way to consume promises
// jis na asyn function hai na await hai aur na hi try-catch hai


//this code has it built-in await quality

fetch('https://api.github.com/users/Ahmed-129')
.then((response)=>{ 
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error));

