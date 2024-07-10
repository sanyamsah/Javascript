function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
    console.log("M");
}
sayMyName();

function add(num1, num2) { // parameters
    return num1 + num2;
}
console.log(add(2, 5)); // 7 // arguments
console.log(add(2, "5")); // 25
console.log(add(2, null)); // 2
console.log(add(2)); // NaN

function userLoginMessage(username){
    return `${username} just logged in.`
}
console.log(userLoginMessage()); // undefined just logged in.
console.log(userLoginMessage("Sanyam"));

function loginMessage(username){ // function loginMessage(username = "Someone") // Default parameter
    if(username === undefined){ // if(!username)
        console.log("Enter username.");
        return;
    }
    else{
        return `${username} just logged in.`
    }
}
console.log(loginMessage());
console.log(loginMessage("Sanyam"));