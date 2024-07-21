// Inheritance

user = {
    username: 'Sanyam',
    email: 'sanyamsah25@gmail.com'
};

const teacher = {
    isQualified: true
};
const teachingSupport = {
    isAvailable: false,
    __proto__: teacher
};
const TASupport = {
    makeAssignment: 'Javascript',
    fullTime: true,
    __proto__: teachingSupport
};

// teacher.__proto__ = user;
// Modern syntax:
Object.setPrototypeOf(teacher,user);