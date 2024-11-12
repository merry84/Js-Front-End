function factorialDivision(num1, num2) {
    // Функция за изчисляване на факториел чрез рекурсия
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1; // Базов случай
        }
        return n * factorial(n - 1); // Рекурсивен случай
    }

    let fact1 = factorial(num1); 
    let fact2 = factorial(num2); 
    
    
    let result = fact1 / fact2;
    console.log(result.toFixed(2)); 
}