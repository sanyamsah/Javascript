if (25 % 2 === 0) {
    console.log("Even number");
}
else {
    console.log("Odd number");
}

if (10 % 2 === 0) console.log("Even number");
else console.log("Odd number");

if (2 == 2) {
    console.log("Hello, World!");
}
else if (2 <= 2) {
    console.log("Hello");
}
else {
    console.log("Bye");
}
console.log("-------------------------");

//Switch case
let exp = "+";
let a = 2;
let b = 3;
switch (exp) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(a / b); break;
    default: console.log("Invalid input"); break;
}