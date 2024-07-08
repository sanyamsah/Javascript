//Arithmetic Operators
console.log(25 + 2);
console.log(25 - 2);
console.log(25 * 2);
console.log(25 / 2);
//for integer/floor value
console.log(parseInt(25 / 2));
console.log(Math.floor(25 / 2));
console.log(25 % 2);
console.log(2 ** 4); //Exponentation operator
console.log("-------------------------")

//Assignment Operators
let x = 25;
console.log(x);
x += 25;
console.log(x);
x -= 25;
console.log(x);
x *= 25;
console.log(x);
x /= 25;
console.log(x);
x %= 25;
console.log(x);
console.log("-------------------------")

//Logical Operators
console.log((25 > 5) && (25 < 5));
console.log((25 > 5) || (25 < 5));
console.log(5 && 0); //Zero is evaluated as (boolean) false
console.log(5 || 0);
console.log(0 && 5);
console.log(0 || 5);
console.log(4 || 5);
console.log(4 && 5);
console.log(5 || 4);
console.log(5 && 4);
console.log(-4 || 4);
//This is known as Short-circuiting
console.log("-------------------------")

//Bitwise Operators
console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);
console.log("-------------------------")

//String concatenation
console.log("Sanyam" + "Sah");
console.log("Sanyam" + " Sah");
console.log(5 + 5 + "5" + 5 + 5);
console.log("-------------------------")

//Ternary Operator
console.log((2 < 1) ? "Sanyam" : "Sah");