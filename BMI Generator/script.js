const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value); // takes empty value
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const guide = document.querySelector('#guide');
    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = '<p>Enter valid height <p>'
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = '<p>Enter valid weight <p>'
    }
    else {
        const bmi = (weight / (height * height) * 10000).toFixed(2);
        result.innerHTML = `<p>BMI = ${bmi} <p>`
        if (bmi < 18.6) {
            guide.innerHTML = `<p>(Under-weight)</p>`
        }
        else if (bmi > 24.9) {
            guide.innerHTML = `<p>(Over-weight)</p>`
        }
        else {
            guide.innerHTML = `<p>(Normal)</p>`
        }
    }
})