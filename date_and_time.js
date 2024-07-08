let date = new Date();
console.log(date, typeof date); // object
console.log(date.toString()); // day of week month day year time GMT zone
console.log(date.toDateString()); // date in week month day year 
console.log(date.toLocaleString()); // date, time
console.log(date.toLocaleDateString()); // date in mm/dd/yyyy
console.log(date.toISOString());
console.log(date.toJSON());

let myCreatedDate = new Date(2023, 0, 25); // Month starts with 0
console.log(myCreatedDate.toDateString());
myCreatedDate = new Date(2023, 0, 25, 5, 3); // 'date' 05:03:00 AM
console.log(myCreatedDate.toLocaleString());

let myDate = new Date("2023-09-10");
console.log(myDate.toLocaleString());

let timeStamp = Date.now(); // miliseconds from January 1, 1970 to now
console.log(timeStamp);
console.log("Seconds: ", Math.floor(timeStamp / 1000)); // miliseconds to seconds
console.log(myDate.getTime()); // miliseconds from first date to my date

console.log(date.getMonth()); // 6 (July), month starts from 0
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1 (Monday)

console.log(date.toLocaleString('default',
    {
        weekday: "long"
    }
))