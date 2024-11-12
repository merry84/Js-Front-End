function modifyNumber(num) {
    // Преобразуваме числото в низ, за да можем да добавяме цифри
    let numStr = num.toString();

    // Функция за изчисляване на средната стойност на цифрите
    function averageDigits(numberStr) {
        let sum = 0;
        for (let char of numberStr) {
            sum += parseInt(char);
        }
        return sum / numberStr.length;
    }

    // Добавяме '9' в края, докато средната стойност стане по-висока от 5
    while (averageDigits(numStr) <= 5) {
        numStr += '9';
    }

    console.log(numStr);
}

// Пример за изпълнение
modifyNumber(123); // Очакван изход: 123999
