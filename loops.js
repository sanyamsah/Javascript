//While-loop
let i = 0;
while (i < 10) {
    if (i == 5) {
        i++;
        continue; //Move to the nearest loop for execution
    }
    console.log(i);
    i++;
    if (i == 9) break; //Come out of the nearest loop
}

console.log("----------------------")

//For-loop
for (let j = 0; j < 10; j++) {
    console.log(j);
}