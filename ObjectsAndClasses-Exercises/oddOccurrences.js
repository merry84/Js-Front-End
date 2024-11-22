function odd(input) {
    const elements = input.toLowerCase().split(' ');

    const wordCount = {};
    elements.forEach(element => {
        wordCount[element] = (wordCount[element] || 0) + 1;
    });

    const oddWords = Object.keys(wordCount)
        .filter(word => wordCount[word] % 2 !== 0);
        
    console.log(oddWords.join(' '));

}