function colorize() {
    const evenRows = document.querySelectorAll('table tbody tr:nth-of-type(even)');

    evenRows.forEach((row) =>(row.style.backgroundColor = 'teal'));

}