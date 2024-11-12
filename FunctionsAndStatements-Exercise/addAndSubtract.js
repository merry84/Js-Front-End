//100/100
// function sum(numOne, numTwo, numThree) {
    
//     // Вътрешна функция за изваждане на третото число от резултата на sum
//     function subtract(sumResult, numThree) {
//         return sumResult - numThree;
//     }

//     // Изчисляваме сумата на първите две числа
//     const sumResult = numOne + numTwo;

//     // Връщаме резултата от subtract, като подадем сумата и третото число
//     return subtract(sumResult, numThree);
// }
sum(5,5,3);
//100/100
function sum (numOne, numTwo, numThree) {
    
    // Вътрешна функция за изваждане на третото число от резултата на sum
    const subtract = (sumResult, numThree) => {
        return sumResult - numThree;
    };

    // Изчисляваме сумата на първите две числа
    const sumResult = numOne + numTwo;

    // Връщаме резултата от subtract, като подадем сумата и третото число
    return subtract(sumResult, numThree);
};