function solve() {
    const table = document.querySelector("table");
    const checkboxes = table.querySelectorAll("thead tr th input[type='checkbox']");
    const rows = table.querySelectorAll("tbody tr");
    const output = document.getElementById("output");

    const selectedColumns = [];
    //За всяка отметка, ако е маркирана, се добавя нейното име (name) и индексът на колоната.
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push({ name: checkbox.name, index });
        }
    });

    const result = [];
    
    //Всеки ред се обработва, като се създава обект за съответния ред. Само стойностите от маркираните колони се добавят към обекта.
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const rowData = {};

        selectedColumns.forEach(column => {
            rowData[column.name] = cells[column.index].textContent;
        });

        result.push(rowData);
    });

    output.value = JSON.stringify(result, null, 2);
}
