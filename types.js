"use strict"; // treat all JS code as newer version

//Number
console.log(25);
console.log(0.25);
console.log(-25);
console.log(0);
console.log(-0);

//String
console.log("String in double quotes");
console.log("String in single quotes");
console.log(`String in backtick`);
//Backtick is used for some special string operations.

//Boolean
console.log(true);
console.log(false);

//Undefined
console.log(undefined);
//Null
console.log(null);

//Object
console.log({ Sanyam: 25 });
//In objects, we store key-value pairs.
//It is like hashmap concept in Java.

//Symbol
console.log(Symbol("Hello"));
//It is like an immutable data type.

//Typeof Operator
console.log(typeof 25);
console.log(typeof "Sanyam");
console.log(typeof "a");
console.log(typeof -0);
console.log(typeof typeof 12);
//The answer we get is a string.
console.log(typeof {"Sanyam":25});
console.log(typeof undefined);
console.log(typeof null); //corner case
console.log(typeof Symbol("Hello"));
console.log(typeof NaN);

// alert("Hello") // Works in browser colsole and we're using node.js

/*
number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness
*/

