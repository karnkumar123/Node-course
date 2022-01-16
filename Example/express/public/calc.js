
function add(){
    let firstNumber = document.querySelector('#firstNumber'),
    secondNumber = document.querySelector('#secondNumber');
    const add = +firstNumber.value + +secondNumber.value;
    document.getElementById('output').innerHTML = add;
}