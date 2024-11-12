function inRange(char1, char2) {
    // Превръщаме символите в ASCII кодове
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    // Разменяме стойностите,ако първият код е по-голям от втория
    if (start > end) {
        [start, end] = [end, start];
    }

    let result = '';

    // Обхождаме ASCII кодовете между двата символа и ги добавяме към резултата
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
     // Извеждаме резултата без водещи и следващи интервали
    console.log(result.trim()); 
}


inRange('a', 'd');
