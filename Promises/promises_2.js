async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // string to json, also takes time
        // console.log(response);
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
// getAllUsers();

// Another method, by then-catch
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error)).finally(() => console.log('Executed'));