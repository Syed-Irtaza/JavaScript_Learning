//dates in JavaScript starts from 1st JAN 1970,UTC arbitrarily
// dates are usually calculated in milliSeconds in JavaScript
//temporal api use for date time but it is now only a proposal

// Dates are bit complex

let nDate=new Date()
//console.log(nDate);//2024-08-07T12:13:15.682Z
// now convert the date
//console.log(nDate.toDateString());//Wed Aug 07 2024
//console.log(nDate.toISOString());//2024-08-07T12:16:02.262Z
//console.log(nDate.toString());//Wed Aug 07 2024 17:16:54 GMT+0500 (Pakistan Standard Time)
// console.log(nDate.toLocaleDateString());//07/08/2024
// console.log(nDate.toLocaleString());//07/08/2024, 17:18:21 ; Hours(in 24-format):minutes:seconds

// console.log(nDate.toLocaleTimeString());//17:20:41 ; Hours(in 24-format):minutes:seconds
// console.log(nDate.toTimeString())//17:21:41 GMT+0500 (Pakistan Standard Time)
// console.log(nDate.toUTCString())//Wed, 07 Aug 2024 12:22:23 GMT

//console.log(nDate.getTimezoneOffset())//-300
//Gets the difference in minutes between 
//Universal Coordinated Time (UTC) 
//and the time on the local computer

//console.log(typeof nDate);//date is an object


//  let myDate=new Date(2023,13,32)//is trhn agr kro ghy tou dates starts from 0 to 11 0=January and 11=December
// console.log(myDate.toDateString())//Sun Mar 03 2024
//13 as a month means Feb how: 13-11=2=>February
//and if month exceeds from 11 then it changes the year also and 13 aur 12 and so on ... are the months of next year

// let nmDate=new Date(2023,11,33)
// console.log(nmDate);//2023-12(11+1 as month start from 0 but dislpay to 12 hi karana na)-31T19:00:00.000Z
// console.log(nmDate.toLocaleDateString());//02/01/2024 date changes the year and month 33-30=2 means 2nd of January

// let tDate=new Date(2023,9,23,5,3)
// console.log(tDate.toLocaleString());


//  let yymmdd=new Date("2024-05-23")
//  //console.log(yymmdd);
 
// console.log(yymmdd.toLocaleString());

// let mmddyyyy=new Date("01-03-2024")

// // console.log(mmddyyyy);
// console.log(mmddyyyy.toLocaleString());

//timestamp uses in quizes, polls etcs also uses in hotels to check the time when customer checked-in the room and checked-out etc
// let myTimeStamp=Date.now()//1st Jan 1970 sy ab tak ka time in millisecond
// console.log(myTimeStamp);
// console.log(mmddyyyy.getTime());//1st Jan 1970 sy 01-03-2024 tak ka time in milliseconds
//used by AirBnb jaisy

// now convert the milliseconds date into seconds
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000))// whole value
 
let newDate=new Date()
//console.log(newDate.getDate());//8th
//const d=newDate.getMonth()//month in number datatype tostring krny sy august ni hoga month number string me hojay gha
// console.log(newDate.getDay());//day starts from 1 monday to 7 sunday

let CusDate=newDate.toLocaleString('default',{
    //dateStyle:'full'
    //weekday:'long'
})
console.log(CusDate);//can customize the date format


 


