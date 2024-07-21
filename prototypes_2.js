countries = ['Nepal', 'India', 'Bhutan', 'Tibet'];
capitals = {
    Nepal: 'Kathmandu',
    India: 'New Delhi',
    Bhutan: 'Thimpu',
    Tibet: 'Lhasa'
};

Object.prototype.functionForObject = function () {
    console.log(`Present in all objects.`);
}
countries.functionForObject();
capitals.functionForObject();

Array.prototype.functionForArray=function(){
    console.log(`Present in all arrays.`);
}
countries.functionForArray();
capitals.functionForArray(); // error: not a function