const hello = () => {
    console.log("Hello, World!");
    console.log(this); // {}
}
hello();

const addNum = (a, b) => { // explicit return
    return a + b; // 7
}
console.log(addNum(2, 5));

const addNums = (a, b) => a + b; // implicit return
console.log(addNums(2, 6)); // 8
const multiplyNums = (a, b) => (a * b);
console.log(multiplyNums(2, 5)); // 10

const returnObject = () => ({ name: "Sanyam", college: "KIIT" }); // object (curly braces) within parentheses
console.log(returnObject());