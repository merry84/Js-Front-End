function deleteByEmail() {
    
    const emailInput = document.querySelector('input[name="email"]').value;


   
    const rows = document.querySelectorAll('#customers tbody tr');

    let found = false; 

    
    for (const row of rows) {
        const emailCell = row.cells[1]; // Втората колона съдържа имейла

        if (emailCell.textContent === emailInput) {
            row.remove(); 
            found = true;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    if (found) {
        resultDiv.textContent = 'Deleted.';
       
    } else {
        resultDiv.textContent = 'Not found.';
        
    }
}
