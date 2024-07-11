let index = 0;
while (index < 10) {
    console.log(index);
    index++;
}

let arr = ['Indra', 'Agni', 'Vayu', 'Prithvi', 'Surya'];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

let score = 1;
do {
    console.log(`Score is ${score}.`);
    score++;
} while (score <= 10);

score = 11;
do {
    console.log(`Score is now ${score}.`);
    score++;
} while (score <= 10); // execute, then check condition