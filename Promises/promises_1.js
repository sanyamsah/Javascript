const promise_1 = new Promise(function (resolve, reject) {
    // Do an async task, ex. database calls, cryptography, network, etc.
    setTimeout(function () {
        console.log('Async task complete');
        resolve(); // connects 'resolve' with 'then' 
    }, 2000);
});
promise_1.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve, reject) { // promise 2
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 2000);
}).then(function () {
    console.log('Async task 2 resolved')
})

const promise_3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ user: 'Sanyam', username: 'sanyamsah' });
    }, 2000)
})
promise_3.then(function (user) {
    console.log(user);
})

const promise_4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ user: 'Sanyam Sah', username: 'sanyamsah', learning: 'Promises' });
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
});
promise_4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => { // chaining
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected'));

const promise_5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ language: 'Javascript', extension: '.js' });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 2000);
});
async function consumePromise_5() {
    // const response = await promise_5;
    // console.log(response); // throws error
    try {
        const response = await promise_5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise_5();