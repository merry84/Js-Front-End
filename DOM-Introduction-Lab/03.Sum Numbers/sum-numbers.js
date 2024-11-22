function calc() {
    const firstNumber = Number(document.querySelector('#num1').value);
    const secondNumber = Number(document.querySelector('#num2').value);

    document.querySelector('#sum').value = firstNumber + secondNumber;
}
//Another solutions
/*
function calculateSum() {
   
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
 
    const sum = num1 + num2;

    document.getElementById('sum').value = sum;
}
 */