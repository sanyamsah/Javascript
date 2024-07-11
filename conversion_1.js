let score = 123;
console.log(score);
console.log(typeof score); // number

score = "123";
console.log(score);
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber); // number

score = "123abc";
console.log(score);
console.log(typeof score); // string

valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber); // NaN

console.log(typeof NaN); // type number

score = null;
console.log(Number(score)); // 0
console.log(typeof Number(score)); // number

score = undefined;
console.log(Number(score)); // NaN
console.log(typeof Number(score)); // number

let isLoggedIn = 1;
console.log(isLoggedIn); // 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn); // true boolean

isLoggedIn = "";
console.log(isLoggedIn); // <empty>
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn); // false boolean

isLoggedIn = "Sanyam";
console.log(isLoggedIn); // Sanyam
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn); // true boolean

