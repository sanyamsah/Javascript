const user = {
    username: 'sanyamsah',
    loginCount: 5,
    signedIn: true,
    getUserDetails: function () {
        console.log('Got details from database.');
        // console.log(`Username: ${username}`); // error because of execution context
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.table(user);
user.getUserDetails();
console.log(this);

function setUser(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting = function () {
        console.log(`Welcome, user ${this.username}!`);
    }
    // return this; // implicitly defined for 'new' keyword
}
// const user_1 = setUser('abc', 35, false);
// console.log(user_1);
// console.log(user_1.username); // abc
// const user_2 = setUser('pqr', 25, true);
// console.log(user_1); // values overwritten
// console.log(user_1.username); // pqr

const user_3 = new setUser('xyz', 50, true);
const user_4 = new setUser('pqr', 500, false);
console.log(user_3.username); // xyz
console.log(user_4.username); // pqr
console.log(user_3.greeting);
console.log(user_3.constructor); // it's own reference