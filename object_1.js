// Object literals

mySymbol = Symbol("myKey1");
const JSUser = {
    name: "Sanyam",
    roll: 21053318,
    mySymbol: "key",
    [mySymbol]: "symbol value", // actual use of symbol
    location: "Bhubaneswar",
    email: "sanyamsah25@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"],
    "college name": "KIIT University"
};
console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["college name"]); // can't be accessed using dot(.), contains space
console.log(JSUser.mySymbol, typeof JSUser.mySymbol); // key string
console.log(JSUser[mySymbol], typeof mySymbol); // symbol value symbol

Object.freeze(JSUser); // changes can't be made
JSUser["email"] = "sanyam25@outlook.com";
console.log(JSUser);

const user = {
    name: "Sanyam",
    roll: 21053318,
    mySymbol: "key",
    [mySymbol]: "symbol value", // actual use of symbol
    location: "Bhubaneswar",
    email: "sanyamsah25@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"],
    "college name": "KIIT University"
};
user.greeting = function(){
    console.log(`Hello JS user, ${this.name}!`);
}
user.greeting();