const balance = new Number(25);
console.log(balance, typeof balance); // [Number: 25] object
console.log(balance.toString(), typeof balance.toString()); // 25 string
console.log(balance.toFixed(2)); // 25.00

const num = 123.89034;
let otherNum = num.toPrecision(4); // 123.9
console.log(otherNum);
otherNum = num.toPrecision(3); // 124
console.log(otherNum, typeof otherNum); // 124 string

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

console.table({
    'Max_Value': Number.MAX_VALUE,
    'MIN_VALUE': Number.MIN_VALUE,
    'MAX_SAFE_INTEGER': Number.MAX_SAFE_INTEGER,
    'MIN_SAFE_INTEGER': Number.MIN_SAFE_INTEGER
});


//Maths

console.log(Math);
console.log(Math.abs(-25)); //25
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

console.log(Math.random()); // random number between 0 & 1
console.log((Math.random() * 10) + 1); // non-zero number, 1 to 10
console.log(Math.floor((Math.random() * 10) + 1)); // integers

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1) + min))); // random number between given range