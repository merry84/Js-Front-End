function solve() {
 
    const input = document.getElementById('input').value;
    const selectMenuTo = document.getElementById('selectMenuTo'); 
    const result = document.getElementById('result'); 

    const conversionType = selectMenuTo.value; 

    let output;

    if (conversionType === 'binary') {

        output = parseInt(input).toString(2); 

    } else if (conversionType === 'hexadecimal') {

        output = parseInt(input).toString(16).toUpperCase();

    } else {

        output = 'Please select a valid conversion option.';
    }

   
    result.value = output;
}
