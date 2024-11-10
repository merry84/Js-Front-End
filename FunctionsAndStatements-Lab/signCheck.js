function checkNumber(numOne, numTwo, numThree) {
    // Проверяваме колко от числата са отрицателни
    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;

    // Ако броят на отрицателните числа е нечетен, резултатът е отрицателен
    if (negativeCount % 2 === 1) {
        console.log('Negative');

    } else {
        console.log('Positive');

    }
}
checkNumber(5, -12, -15);