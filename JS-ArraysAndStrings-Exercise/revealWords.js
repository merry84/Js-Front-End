function reveal(words, string){
    words = words.split(', ')
    string = string.split(' ')
    for (let i=0; i < string.length; i++){
        for (const word of words){
            if (string[i][0] === '*' && string[i].length === word.length){
                string[i] = word
            }
        }
    }
    console.log(string.join(' '))
}
// Another solution
// function reveal(words, string) {
//     const wordList = words.split(', ');
//     const stringList = string.split(' ');

//     // Замяна на звездните думи, използвайки методи на масива
//     const revealedString = stringList.map(word => {
//         // Проверяваме дали думата започва със звездички и търсим подходящата дума по дължина
//         if (word.startsWith('*')) {
//             return wordList.find(w => w.length === word.length) || word;
//         }
//         return word;
//     });

//     console.log(revealedString.join(' '));
// }



solve('great', 'softuni is ***** place for learning new programming languages')

