const user = {
    email: "sanyamsah25@gmail.com",
    userId: "sanyam_sah",
    fullName: {
        firstName: "Sanyam",
        lastName: "Sah"
    }
}
console.table(user);
console.log(user);
console.log(user.fullName.firstName);

const obj_1 = {
    1: "a",
    2: "b"
}
const obj_2 = {
    3: "c",
    4: "d"
}
const obj_3 = { obj_1, obj_2 };
console.log(obj_3); // objects inside object
const obj = Object.assign({}, obj_1, obj_2); // first parameter is the new/modified object
console.log(obj);
const obj_4 = {...obj_1, ...obj_2}; // spreading: widely used method // called spread operator in this case
Object.assign(obj_1, obj_2);
console.log(obj_1); // new object assigned to obj_1;

const users = [
    {
        id: 1,
        name: "Sanyam"
    },
    {
        id: 2,
        name: "Roshan"
    },
    {
        id: 3,
        name: "Devkota"
    }
]; // array of objects
console.log(users[0].name); // Sanyam: accessed a value of first object

const JSuser = {
    name: "Sanyam",
    roll: 21053318,
    location: "Bhubaneswar",
    email: "sanyamsah25@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"],
    "college name": "KIIT University"
};
const keys = Object.keys(JSuser); // array of keys of the object
const values = Object.values(JSuser); // array of values of the object
console.log(keys, values);
console.log(JSuser.hasOwnProperty('location')); // true: checks if a key exists