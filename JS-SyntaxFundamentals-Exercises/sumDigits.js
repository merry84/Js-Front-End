function sumDigits(numbers) {
    const stringNum = numbers.toString();// number->string
    let sum = 0;
    for (let index = 0; index < stringNum.length; index++) {

        sum += Number(stringNum[index]); //string->number
    }
    console.log(sum);

}