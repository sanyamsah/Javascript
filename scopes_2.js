function one(){
    const username = "Sanyam";
    function two(){
        const website = "www.kiit.ac.in";
        console.log(username); // username has scope within one(), so it can be accessed.
    }
    // console.log(website); // error: website is not defined
    two();
}
one();

if(true){
    const name = "Sanyam";
    if(name === "Sanyam"){
        const website = "www.kiit.ac.in";
        const surname = " Sah";
        console.log(name + surname);
    }
    // console.log(website); // error: website is not defined
}
// console.log(name); // error: name is not defined


// Interesting case --------------------

console.log(addOne(4)); // 5 
function addOne(num){
    return num + 1;
}
console.log(addOne(4)); // 5 

// console.log(addTwo(5)); // error: Cannot access 'addTwo' before initialization
const addTwo = function(num){ // also called expression
    return num+2;
}
console.log(addTwo(5)); // 7