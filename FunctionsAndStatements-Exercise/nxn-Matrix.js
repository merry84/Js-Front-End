function matrix(number) {

    for (let i = 0; i < number; i++) {
        console.log((number.toString() + ' ').repeat(number).trim());
    }

}

//Another solution
function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(n);
        }
        console.log(row.join(' '));
    }
}