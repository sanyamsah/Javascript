const arr = [1, 2, 3, 4, 5, 'Sanyam', 2.5];
console.log(arr, typeof arr);
arr[7] = 25;
console.log(arr);
brr = new Array(1, 2, 3, 4, 5);
console.log(brr, typeof brr);

// Array methods
brr.push(6); // adds element to the last
console.log(brr);
brr.pop(); // removes last element
console.log(brr);
brr.unshift(99); // adds 99 to first, shifts rest
console.log(brr);
brr.shift(); // removes first element and shifts the rest
console.log(brr);
console.log(arr.includes(9)); // false
console.log(arr.indexOf(9), arr.indexOf(2)); // -1 1

newArr = arr.join();
console.log(arr, typeof arr); // object
console.log(newArr, typeof newArr); // string

// slice, splice
crr = [0,1,2,3,4,5];
console.log("Sliced: ", crr.slice(0,3), "Array: ", crr); // no changes in array
console.log("Spliced: ", crr.splice(0,3), "Array: ", crr); // removes the piece from the array