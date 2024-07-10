// this keyword

const user = {
    username: "Sanyam",
    price: 999,
    welcomeMessage: function () {
        console.log(`Welcome, ${this.username}.`);
        console.log(this);
    }
};
user.welcomeMessage(); // Welcome, Sanyam.
user.username = "San";
user.welcomeMessage(); // Welcome, San.
console.log(this); // {}

function fun() {
    console.log(this);
}
fun();
function fun_2() {
    let username = "Sanyam"; // if let is absent, prints Sanyam
    console.log(this.username);
}
fun_2(); // undefined


// Arrow function 

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