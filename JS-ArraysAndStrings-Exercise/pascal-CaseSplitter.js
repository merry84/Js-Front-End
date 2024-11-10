//100/100

function splitter(input){
    const words = input.split(/(?=[A-Z])/);
    console.log(words.join(", "));
}

splitter("ThisIsAnExampleString");

//Another solution 100/100

// function splitPascalCase(inputString) {
//     let words = "";  

//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i];

// Проверяваме дали текущият символ е главна буква, освен ако не е първият символ
//         if (i > 0 && char === char.toUpperCase()) {
//             words += ", "; 
//         }

//         words += char; 
//     }

//     console.log(words);
// }