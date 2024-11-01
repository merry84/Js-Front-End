function sameNumbers(number) {
    let check = true;
    let partOfNumber = number % 10;
    
    let sum = 0;

    while (number > 0) {
        const currentDigit = number % 10;
        if(currentDigit!== partOfNumber){
            check=false;
        }
        sum+= currentDigit;

        number= parseInt(number/10);
    }
    console.log(check);
    console.log(sum);
    
}
//another solution
function sameNumbers(number) {
    const stringToNumber = number.toString();
    let check = true;
    let sum = 0;
    for (let index = 0; index < stringToNumber.length; index++) {
        
        if (stringToNumber[index] !== stringToNumber[index + 1]
            && index < stringToNumber.length - 1) {
            check = false;

        }
        sum += Number(stringToNumber[index]);

    }
    console.log(check);

    console.log(sum);
}