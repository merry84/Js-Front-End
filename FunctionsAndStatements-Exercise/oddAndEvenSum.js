function sumEvenOddDigits(number) {
    const digits = number.toString().split(''); // Преобразуваме числото в низ и го разделяме на масив от цифри

    return digits.reduce((sums, digit) => {
        const num = Number(digit); // Преобразуваме символа в число
        if (num % 2 === 0) {
            sums.evenSum += num; // Ако е четно, добавяме го към сумата на четни
        } else {
            sums.oddSum += num; // Ако е нечетно, добавяме го към сумата на нечетни
        }
        return sums; // Връщаме актуализираните суми
    }, { evenSum: 0, oddSum: 0 }); // Начални стойности за сумите на четни и нечетни
}

// Пример за използване на функцията:
const result = sumEvenOddDigits(123456);
console.log(result); // Изход: { evenSum: 12, oddSum: 9 }
