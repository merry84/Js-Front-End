function search(text, word) {
    let words = text.split(' ');
    let count = 0;

    for (let currWord of words) {
        if (currWord == word) {
            count++;
        }
    }
    
    console.log(count);
}
search('This is a word and it also is a sentence',
    'is');