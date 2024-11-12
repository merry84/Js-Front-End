function checkPalindromes(numbers) {
    for (let number of numbers) {
        const isPalindrome = isPalindromeNumber(number);
        console.log(isPalindrome);
    }


    function isPalindromeNumber(number) {
        const original = number.toString(); // Превръщаме числото в текст (низ)
        const reversed = original.split('').reverse().join(''); // Обръщаме текста

        return original === reversed; // Проверяваме дали е еднакъв с обърнатия вариант
    }
}
