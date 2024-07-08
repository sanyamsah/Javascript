let demigods = ['Indra', 'Agni', 'Vayu'];
let demons = ['Bhasmasur', 'Mahishasur', 'Hiranyakashyapu'];
demigods.push(demons);
console.log(demigods); // demons array inside demigods array
console.log(demigods[3][0]); // Bhasmasur

demigods = ['Indra', 'Agni', 'Vayu'];
demons = ['Bhasmasur', 'Mahishasur', 'Hiranyakashyapu'];
const all = demigods.concat(demons);
console.log(all);
const allNew = [...demigods, ...demons, ...all]; // spreading array, more than two array concatanation
console.log(allNew);

const arr_1 = [0,1,2,[3,4,5],[6,[7,8,9]]];
const arr_2 = arr_1.flat(1);
console.log(arr_2); // removed by one-depth
const arr_3 = arr_1.flat(2); // arr_1.flat(Infinity);
console.log(arr_3);

console.log(Array.isArray("Sanyam")); // false
console.log(Array.from("Sanyam")); // prints array
console.log(Array.from({name : "Sanyam"})); // not specified if array ought to be made from key or value

let score_1 = 100;
let score_2 = 200;
let score_3 = 300;
console.log(Array.of(score_1, score_2, score_3));