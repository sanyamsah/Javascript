const coding = ["C", "C++", "Java", "Python", "Javascript"];
const values = coding.forEach((item) => {
    return item;
});
console.log(values); // undefined: forEach doesn't return any value

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = arr.filter((num) => num > 5); // implicit return
console.log(nums); // prints numbers greater than 5
nums = arr.filter((num) => {
    num > 5;
})
console.log(nums); // []
nums = arr.filter((num) => {
    return num > 5; // explicit return
})
console.log(nums);
// if you open scope, use explicit return

newNums = [];
arr.forEach((num) => {
    if (num > 5) {
        newNums.push(num);
    }
})
console.log(newNums); // [6,7,8,9]