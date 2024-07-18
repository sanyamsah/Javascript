// Generate color using random Hexadecimal values
function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += hex[index];
    }
    return color;
}
// console.log(randomColor());
let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 2000);
    }
    function changeBgColor() {
        document.querySelector('body').style.backgroundColor = randomColor();
    }
}
document.querySelector('#start').addEventListener('click', startChangingColor);
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#stop').addEventListener('click', stopChangingColor);