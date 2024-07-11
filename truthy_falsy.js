const userEmail = "sanyamsah25@gmail.com"; // if empty, falsy value
if (userEmail) { // truthy value: assumed true
    console.log("Got user email");
}
else {
    console.log("No user email");
}

const arr = []; // true, empty array
if (arr) console.log("True");

/* Falsy values:
false, 0, -0, big int: 0n, "", null, undefined, NaN
*/

/* Truthy values:
true, "0", 'false', " " (space within string), [], {}, function(){} 
*/

if (arr.length === 0) console.log("Empty array.");

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) console.log("Empty object.");


// Nullish Coalescing Operator (??) : null undefined
let value;
value = 5 ?? 10; // 5
console.log(value);
value = null ?? 10; // 10
console.log(value);
value = 10 ?? null; // 10
console.log(value);
value = undefined ?? 10; // 10
console.log(value);
variable = undefined ?? 15; // 15
console.log(variable);
value = null ?? 20 ?? 50; // 20
console.log(value);


// Ternary operator
max = 10 > 20 ? 10 : 20;
console.log(max); // 20

const price = 100;
price > 200 ? console.log("high") : console.log("low"); // low