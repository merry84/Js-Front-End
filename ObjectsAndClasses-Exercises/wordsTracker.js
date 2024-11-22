function tracker(input) {
    const words = input[0].split(' ');
    const dataWords = input.slice(1);

    const countWords = {};
    //Създаваме обект countWords, където всяка целева дума е ключ, а стойността започва от 0.
    words.forEach(element => {
        countWords[element] = 0;
    });
    //Преглеждаме думите от останалата част на масива.
    //Ако думата се съдържа в обекта countWords, увеличаваме стойността ѝ с 1.
    dataWords.forEach(word => {
        if (word in countWords) {
            countWords[word] += 1;
        }
    });
    // Подреждаме думите по броя им в низходящ ред
    //Превръщаме обекта в масив от двойки [дума, брой] с Object.entries(countWords).
    const sortedWordCount = Object
        .entries(countWords)
        .sort((a, b) => b[1] - a[1]);//The words should be sorted by count in descending.->b[1] - a[1]
    sortedWordCount.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);

    });
}
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);