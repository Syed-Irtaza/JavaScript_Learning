const accountId =13444
let accountEmail="goga@gmail.com"
var accountPass="1234"
accountCity="Lahore" // not good to use this method but it is possible
//accState //error
let accState //undefined by default          note: semi-colon is not need (dalo ya na dolo koi faraq nhi prta)

//let's do some investigation
//accountId=5 it is not allowed cuz it is with const keyword

accountPass="222"
accountEmail="hi"
accountCity="karachi"

//console.log(accountId)
//console.log(accountEmail)
var idd=12
console.log(idd)
if(1){
    var idd=13
    let accountPass="232"
}
console.log(idd)

// prefer not to use 'var' 
// becuz issue in block scope and functional scope

console.table([accountId,accountEmail,accountPass,accountCity,accState])