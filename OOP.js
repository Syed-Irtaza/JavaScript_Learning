//JavaScript me Classes nahi thi 
//abhi ES6 me ayi hn
//JS is a prototype langaugae
//protoType means kabhi har ni mani
// means if there is an error to yeh parent k pass jaye ghi aur aisy pichy jati jaye ghi 
//until null ya undefined na ajay


//Classes sy phyly objects sy classes wala kam liya jata tha 
function user(name,age,email){
    this.name=name
    this.age=age
    this.email=email
}

let a=new user("ALi",21,"hello")
let b=new user("Irtaza",18,"bye")

