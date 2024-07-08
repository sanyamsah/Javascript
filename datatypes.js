// Primitive Types: Number, String, Boolean, null, undefined, Symbol, BigInt
// Reference/Non-primitive Types: Array, Object, Functions
// Javascript is a dynamically-typed language.

const id = Symbol(123);
const anotherId = Symbol(123);
console.log(id == anotherId); // false

const bigInt = 12345678901234567890n; // BigInt
console.log(bigInt);

const demigods = ["Indra", "Agni", "Vayu"]; // array
console.log(demigods, typeof demigods); // type: object
console.table(demigods);

let obj = {
    name: "Sanyam",
    age: 22
}
console.log(obj);
console.table(obj);

const myFunction = function () {
    console.log("Hello, World!");
}
myFunction(); // type: object function

