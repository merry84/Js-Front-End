function isPerfectNumber(number) {
    // Проверяваме дали числото е положително
    if (number <= 0) {       
        return;
    }

    // Изчисляваме сумата на делителите
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    // Проверяваме дали числото е съвършено
    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
