function book(info) {
    const addressBook = {};
    info.forEach(element => {
        const [name, address] = element.split(':');

        addressBook[name] = address;

    });
    const sortedBook = Object.keys(addressBook).sort();

    sortedBook.forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`);

    });
}
book(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);