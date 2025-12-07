console.log(Math.PI);
// quest PI is a constant value so we can't change its value
// so what is the exact reason for that

// let's see PI's properties iska answer milega
let a = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(a); //  value: 3.141592653589793,
// writable: false,  so the writable property of PI is false that why we can't change its value
// enumerable: false,
// configurable: false
// }

let obj = {
  name: "ALI",
  age: 21,
};

let b = Object.getOwnPropertyDescriptor(obj, "name");
console.log(b);

// { value: 'ALI', writable: true, enumerable: true, configurable: true }

// Object.defineProperty(obj,"name",{
//     writable:false
// })
// obj.name="IRTAZA"
// console.log(obj);

// Object.freeze(obj)//it freeze whole object to be change
// obj.age=55
// obj.name="Irtaza"
// console.log(obj);

//enumerable loop py ni chaly gha
Object.defineProperty(obj, "name", {
  enumerable: false, //it will not access the name
});

for (const [key, value] of Object.entries(obj)) {
  //Object.entries() kr k for loop lag skta
  console.log(key, value);
}
// enumerable loop k sth chly gha
// means loop mein wo enumerable: false wali key:value show ni hogi but in the or for the loop

