array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element * 10);
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is the best number.");
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) { // nested for-loop
    console.log(`Outer loop value: ${i}.`);
    for (let j = 0; j < 5; j++) {
        console.log(`Outer loop value: ${i}, Inner loop value: ${j}.`)
    }
}

// Table of 11 to 19:
for (let i = 11; i < 20; i++) {
    console.log(`Table of ${i}: `);
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}