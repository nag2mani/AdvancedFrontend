console.log(myVar); // undefined
var myVar = 5;
console.log(myVar);

// The myFunc function is fully hoisted, allowing it to be called before its definition.
console.log(myFunc());
function myFunc() {
    return "Hello";
}

const x = 10;
// Here x is 10
console.log(x)

{
    const x = 2;
    console.log(x)
}
console.log(x)


// // This will not give error;
// alert(name);
// var name = "Nagmani";

// // This will give error; Variables defined with const are also hoisted to the top, but not initialized. Meaning: Using a const variable before it is declared will result in a ReferenceError:
// alert(name);
// const name = "Nagmani";

function alt() {
    alert("Hi");
}

let y = "5";
let z = 5;
console.log(typeof(y));
console.log(typeof z);


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

p1 = new Person("Nagmani", 22);
console.log(p1 instanceof Person);
// console.log(p1.age); 



// It is a common practice to declare objects with the const keyword.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person.firstName);
console.log(person.lastName);


// Create an Object and add their properties(It is similar as above);
const person1 = new Object();
person.name = "John";
person.age = 50;
person.eyeColor = "blue";


