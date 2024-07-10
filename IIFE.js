// Immediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope.

(function fun() { // named IIFE
    console.log("Database connected..");
})(); // definition (), execution ()
// here, the first parentheses are for function definition, the second for execution
// done to avoid to prevent pollution of global scope
// make sure to use semicolon to end the context

(function fun_2() {
    console.log("Function 2");
})();

(() => { // unnamed IIFE
    console.log("Arrow function.");
})();

((name) => {
    console.log(`Name: ${name}`)
})('Sanyam');