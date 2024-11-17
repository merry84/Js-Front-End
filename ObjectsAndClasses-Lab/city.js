function cityInfo(city){
    let objectCity= Object.entries(city);

    for (const [key,value] of objectCity) {
        console.log(`${key} -> ${value}`);
        
    }
}

// Another solution
function cityInfo(city) {
    Object.entries(city).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    });
}

// Another solution
// Използваме city.hasOwnProperty(key), за да се уверим, че ключът е собственост на обекта, а не е наследен от неговия прототип.
function cityInfo(city) {
    for (const key in city) {
        if (city.hasOwnProperty(key)) {
            console.log(`${key} -> ${city[key]}`);
        }
    }
}


cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);