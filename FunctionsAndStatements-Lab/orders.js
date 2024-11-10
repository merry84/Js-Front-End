function totalPrice(product, price) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };



    prices.hasOwnProperty(product.toLowerCase())
    const calcPrice = prices[product.toLowerCase()] * price;
    console.log(calcPrice.toFixed(2));

}
totalPrice("water", 5);
// coffee - 1.50
// water - 1.00
// coke - 1.40
// snacks - 2.00
