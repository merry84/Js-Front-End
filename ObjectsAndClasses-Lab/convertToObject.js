function jsonString(input) {
    // Преобразуваме JSON низа в обект
    let json = JSON.parse(input);
    // Обхождаме всеки ключ-стойност двойка с forEach
    Object.entries(json).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);

    });

}

//Another solution
function parseAndPrint(jsonString) {

    const obj = JSON.parse(jsonString);


    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }

}
jsonString('{"name": "George", "age": 40, "town": "Sofia"}');
parseAndPrint('{"name": "Peter", "age": 35, "town": "Plovdiv"}');