console.log(1 > 2) // false

console.log("2" < 1); // false
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true
// Equality check (==) and Comparisons (<,>,<=,>=) work differently
// Comparisons convert null to a number

console.log("2" == 2); // true
console.log("2" === 2); // false
console.log(2 === 2); // true: checks datatype too
console.log(100.0 == 100); // true
console.log(100.0 === 100); // true