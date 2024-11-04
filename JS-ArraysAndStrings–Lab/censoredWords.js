function replace(text, word) {
    //'*'.repeat(word.length): Създава низ от звездички със същата дължина като целевата дума word.
    //Цикъл while: Проверява дали думата все още се съдържа в текста и я заменя със звездички, докато всички нейни срещания изчезнат
    let censored = text.replace(word, '*'.repeat(word.length));
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }
    console.log(censored);

}
replace('Find the hidden word', 'hidden');