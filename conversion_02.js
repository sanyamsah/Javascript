let value = 25;
let negValue = -value;
console.log(negValue, typeof negValue); // -25 number

console.log(1 + 2); // 4
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(2 + 2 + "1"); // 41
// ToPrimitive comes into play

console.log(+true); // 1
console.log(Number(true) + Number(true)); // 2
console.log(+""); // 0

