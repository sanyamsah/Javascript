function cartPrice(...num) { // called Rest operator in this case
    return num;
}
console.log(cartPrice(100, 200, 300, 400, 500)); // array

function cartPrice_2(val1, val2, ...num) {
    return num;
}
console.log(cartPrice_2(100, 200, 300, 400, 500)); // [300,400,500]

const user = {
    item: "Shampoo",
    price: 299
};
function handleObject(anyObject) {
    console.log(`Item is ${anyObject.item} & price is ${anyObject.price}.`);
    // if anyObject.price is replaced by suppose anyObject.prices, displays undefined in that place. 
}
handleObject(user);
handleObject({
    item: "Soap",
    price: "42"
});

const myArr = [1, 2, 3, 4, 5, 6];
function getSecondValue(arr) {
    return arr[1];
}
console.log(getSecondValue(myArr));
console.log(getSecondValue([100, 200, 300, 400, 500]));