function calculate(fruit,grams,pricePerKg){

    let kg =grams/1000;
    let money= pricePerKg*kg;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
    
}