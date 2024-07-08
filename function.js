function fun(x) {
    console.log(x + 10);
    return x * 10;
}
console.log(fun(10));
console.log("----------------------");

let x = console.log;
x(10);
console.log("----------------------");

let y = fun;
console.log(y(10));