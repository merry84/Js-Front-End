function validatePassword(password) {
    let isValid = true;

    // Проверка на дължината
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }


    //  Проверка дали съдържа само букви и цифри
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    //  Проверка за поне 2 цифри
    const digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    // Ако всички правила са изпълнени, отпечатваме, че паролата е валидна
    if (isValid) {
        console.log("Password is valid");
    }
}