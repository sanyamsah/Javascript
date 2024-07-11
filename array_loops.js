// Array-specific loops:

// for-of loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of arr) {
    console.log(element);
}

const name = "Sanyam";
for (const character of name) {
    console.log(`Character: ${character}`);
}

// Maps: an object; holds key-value pairs and remembers the original insertion order of the keys
const map = new Map();
map.set('Odisha', 'Bhubaneswar');
map.set('Telangana', 'Hyderabad');
map.set('Tamil Nadu', 'Chennai');
console.table(map);
map.set('Odisha', 'Bhubaneswar'); // repeated
console.log(map); // doesn't repeat redundant pair
for (const pair of map) {
    console.log(pair);
}
for (const [key, value] of map) { // destructuring of object
    console.log(key, " : ", value);
}

// Object
const obj = {
    Nepal: "Kathmandu",
    India: "New Delhi",
    Bhutan: "Thimpu",
    Tibet: "Lhasa"
};
// for(const pair of obj){
//     console.log(pair); // TypeError: obj is not iterable
// }
for (const pair in obj) {
    console.log(pair); // prints keys
}
for (const key in obj) {
    console.log(key, " : ", obj[key]);
}

// for-in loop for array
brr = ["Nepal", "India", "Bhutan", "Tibet"];
for (const value in brr) {
    console.log(value); // prints the indices
    console.log(brr[value]); // now prints elements
}
// for-in loop doesn't work for maps; it is not iterable; doesn't show output if you try


// forEach loop
const coding = ["C", "C++", "Java", "Python", "Javascript"];
coding.forEach(function (element) { // call-back function: no name needed
    console.log(element);
})
coding.forEach((element) => {
    console.log(element);
})
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // just give function reference, don't execute
coding.forEach((element, index, arr) => {
    console.log(index, arr, element);
})

codingLanguages = [
    {
        name: "C",
        extension: ".c"
    },
    {
        name: "C++",
        extension: ".cpp"
    },
    {
        name: "Java",
        extension: ".java"
    },
    {
        name: "Python",
        extension: ".py"
    },
    {
        name: "Javascript",
        extension: ".js"
    }
]; // array of objects
codingLanguages.forEach((item)=>{
    console.log(item);
    console.log(item.name);
    console.log(item.extension);
})