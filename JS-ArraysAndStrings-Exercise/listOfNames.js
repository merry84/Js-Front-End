function printSortedNames(names) {
    // Сортиране на имената с localeCompare
    names.sort((a, b) => a.localeCompare(b));
   
    // Отпечатване на всяко име с номер
    names.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });

}
