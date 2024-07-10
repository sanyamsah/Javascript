const course = {
    courseName: "Javascript",
    coursePrice: "1000",
    courseInstructor: "Sanyam"
};
const { courseInstructor } = course;
console.log(courseInstructor); // Sanyam
const { courseName: name } = course;
console.log(name); // Javascript

