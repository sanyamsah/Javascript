// if-statement
if (true) {
    // scope
}
if (false) {
    // scope
}
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("Logged in");
}
const condition = false;
if (!condition) {
    console.log("Condition False");
}


// Shorthand notation
const balance = 1500;
if (balance < 2000) console.log("Low balance");

if (balance <= 2000) console.log("Balance is low"), console.log("Increase balance"); // within the scope
// use comma & semicolon to put within scope 
// unreadable code


// Nesting
if (balance > 2000) {
    console.log("more than 2000")
}
else if (balance > 1500) {
    console.log("more than 1500");
}
else if (balance > 1000) {
    console.log("more than 1000")
}
else {
    console.log("low balance");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInWithEmail = true;
if (userLoggedIn && debitCard) {
    console.log("User can buy");
}
if (loggedInFromGoogle || loggedInWithEmail) {
    console.log("User can buy");
}


// switch-case
const day = 5;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday")
    default:
        console.log("Enter valid number");
        break;
}
