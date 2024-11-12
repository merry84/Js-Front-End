function commands(input) {

    let value = 0;
    input.forEach(command => {
        if (command === 'soap') {
            value += 10;
        }
        else if (command === 'water') {
            value *= 1.2;
        }
        else if (command === 'vacuum cleaner') {
            value *= 1.25;
        }

        else if (command === 'mud') {
            value *= 0.9;
        }
    });
    console.log(`The car is ${value.toFixed(2)}% clean.`);


}
commands(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);