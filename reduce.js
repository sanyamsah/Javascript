const arr = [1, 2, 3, 4, 5];
// Sum of array elements:
let sum = arr.reduce(function (acc, currValue) {
    console.log(`Accumulator: ${acc}, Current value ${currValue}.`)
    return acc + currValue;
}, 0);
console.log(sum);
// Product of array elements:
let product = arr.reduce(function (acc, currValue) {
    console.log(`Accumulator: ${acc}, Current value ${currValue}.`)
    return acc * currValue;
}, acc = 1); // default acc value: 1
console.log(product);
sum = arr.reduce((acc, currValue) => acc + currValue, 0);
console.log(`Sum = ${sum}`);

const shoppingCart = [
    {
        itemName: "Shirt",
        price: 299
    },
    {
        itemName: "Chinos",
        price: 399
    },
    {
        itemName: "Watch",
        price: 1499
    },
    {
        itemName: "Belt",
        price: 199
    }
];
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total price: ${totalPrice}.`);