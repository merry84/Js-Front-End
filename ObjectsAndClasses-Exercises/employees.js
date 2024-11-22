function info(input) {
    const employeeInfo = {};
    input.forEach(element => {
          // За всяко име на служител изчисляваме дължината му и го записваме в обекта
        employeeInfo[element] = element.length;
    });

    for (const name in employeeInfo) {
       
        console.log(`Name: ${name} -- Personal Number: ${employeeInfo[name]}`);
    }

}
info([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )