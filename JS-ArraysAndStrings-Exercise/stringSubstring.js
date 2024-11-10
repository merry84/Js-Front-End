// 100/100
function substring(word,text){
    
    const toLowerWord=word.toLowerCase();
    const toLowerText= text.toLowerCase().split(" ");
    if(toLowerText.includes(toLowerWord)){
        console.log(toLowerWord);
        
    }
    else{
        console.log(`${toLowerWord} not found!`);
    }
}
substring('javascript','JavaScript is the best programming language');

// Another solution 100/100
// function findWord(word, text) {
//     // Създаваме регулярен израз, който търси думата независимо от големината на буквите
//     const regex = new RegExp(`\\b${word}\\b`, 'i'); // \b гарантира, че търсим точно дума, а не част от дума
    
//     if (regex.test(text)) {
//         console.log(word);  
//     } else {
//         console.log(`${word} not found!`);  
//     }
// }

 // Another solution 100/100
/*function findWord(word, text) {
   

    const lowerCaseWord = word.toLowerCase();
    const words = text.toLowerCase().split(" "); 

    // Използваме some(), за да проверим дали някоя от думите съвпада с търсената
    const found = words.some(w => w === lowerCaseWord);

    if (found) {
        console.log(word);  
    } else {
        console.log(`${word} not found!`); 
    }
}*/