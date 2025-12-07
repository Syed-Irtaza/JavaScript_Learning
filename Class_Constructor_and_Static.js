// class user{
//     constructor(name,age,email){
//         this.name=name
//         this.age=age
//         this.email=email
//     }
//     increment(){
//         console.log("HELLO WORLD");
        
//     }
// }

// // let a=new user("ALI",21,"HELLO")
// // console.log(a.increment());


// //inheritance

// class user2 extends user{
//     constructor(name,f_ame){
//         super(name)
//         this.f_ame=f_ame
//     }
//     log(){
//         console.log(this.name);
        
//         console.log(`${this.f_ame} is Logged in`)
//     }
// }
// new user("Hafiz",22,"BYE")
// let b=new user2("","Irtaza")
// console.log(b.log());

// console.log(b.increment());


class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
   static increment() { // now static is not available publically
      console.log(`${this.name}`);
    }
  }
  
  // let a = new User("ALI", 21, "HELLO");
  // console.log(a.increment());
  
  // inheritance
  
  class User2 extends User {
    constructor(name, f_name, email) {
      super(name, null, email); 
      this.f_name = f_name;
    }
  
    log() {
        User.increment()
      console.log(`${this.name} is Logged in`);
    }
  }
  
  let c=new User("DILBAR",24,"TA-TA")
  let b = new User2("ALI", "Hafiz Ahmed", "ahmed@google.com");
  b.log();
//   b.increment();


console.log(b instanceof User2);
console.log(b instanceof User);


console.log(c instanceof User);
console.log(c instanceof User2);



