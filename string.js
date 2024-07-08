// Using backticks (``): String interpolation
const name = "Sanyam";
const repoCount = 10;
console.log(`Hello, my name is ${name} & my repo count is ${repoCount}.`);

const id = new String('sanyam_sah'); // string object
console.log(id);
console.log(id[0]); // s
console.log(id.length); // 10
console.log(id.__proto__); // Run in browser console

console.log(name.toUpperCase());
console.log(id.charAt(2));
console.log(id.indexOf('_'));

console.log(id.substring(0, 6)); // sanyam // if given negative value, start with 0
console.log(id.slice(-9, 4)); // can take negative values

const branch = "  CSE  ";
console.log(branch);
console.log(branch.trim()); // removes spaces

const url = "https://www.linkedin.com/in/sanyam%20sah";
console.log(url.replace('%20', '-'));
console.log(url.includes(`sanyam`)); // true

const arr = id.split('_');
console.log(arr); // array of strings 'sanyam' and 'sah'
