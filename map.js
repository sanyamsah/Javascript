const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNums = nums.map((num) => num * 10);
console.log(newNums);
newNums = nums.map((num) => {
    return num + 10
});
console.log(newNums);

// Chaining
newNums = nums.map((num) => num * 10).map((num) => num + 1);
console.log(newNums);  // [11,21,31,41,51,61,71,81,91]
// Here, value from first map is passed on to next map in the chain.
newNums = nums.filter((num) => num > 5).map((num) => num * 10);
console.log(newNums); // [60,70,80,90];