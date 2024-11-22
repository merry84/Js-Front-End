function dictionary(input) {

    const arrayDictionary = {};


    input.forEach(element => {
        const parsed = JSON.parse(element);
        for (const term in parsed) {
            arrayDictionary[term] = parsed[term];
        }
    });

    Object.keys(arrayDictionary)
        .sort()
        .forEach(term => {
            console.log(`Term: ${term} => Definition: ${arrayDictionary[term]}`);

        });
}