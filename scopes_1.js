var a = 100;
d = 400;
let e = 500; // global scope
if(true){
    var a = 10; // global scope
    let b = 20; // local scope
    console.log(b); // 20 
    const c = 30; // local scope
    d = 40; // global scope
    let e = 50; // local scope
    console.log(e); // 50
}
console.log(a); // 10;
// console.log(b); // error: b is not defined
// console.log(c); // error: c is not defined
console.log(d); // 40
console.log(e); // 500