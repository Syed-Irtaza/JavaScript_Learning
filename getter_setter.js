class User{
    constructor(email,password){
         this.email=email
         this.password=password
    }
    //getter()

    get password(){
        return this._password.toUpperCase()
    }

    //setter() set the value in the variable
    set password(v){
        return this._password=v.toUpperCase()//this laga ho tou return lagana zaroori nahi

    }
    
}

let a=new User("ALI","Hello")
console.log(a.password);//RangeError: Maximum call stack size exceeded cuz password name setter getter dono me a rha

// to save from that use _ 

