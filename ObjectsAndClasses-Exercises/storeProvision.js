function store(currentStock, orders) {

    const stock = {};
    for (let index = 0; index < currentStock.length; index += 2) {
        const product = currentStock[index];
        const quantity = Number(currentStock[index + 1]);
        stock[product] = quantity;

    }
    for (let index = 0; index < orders.length; index += 2) {
        const product = orders[index];
        const quantity = Number(orders[index + 1]);
        // Ако продуктът вече съществува, увеличаваме количеството
        if (stock.hasOwnProperty(product)) {
            stock[product] += quantity;
        } else {
            stock[product] = quantity;
        }
    }
    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);

    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);