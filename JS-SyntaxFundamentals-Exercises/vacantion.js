//You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.
//            Friday	Saturday	Sunday
// Students   8.45	   9.80	        10.46
// Business	  10.90	   15.60	    16
// Regular	  15	   20       	22.50

function priceForPerson(countOfPerson, typeOfPerson, dayOfWeek) {
    let price = 0;
    const isFriday = dayOfWeek === "Fryday";
    const isSaturday = dayOfWeek === "Saturday";
    const isSunday = dayOfWeek === "Sunday";

    const isStudents = typeOfPerson === "Students";
    const isBusiness = typeOfPerson === "Business";
    const isRegular = typeOfPerson === "Regular";
    if (isFriday) {
        if (isStudents) {
            price += 8.45;
        }
        else if (isBusiness) {
            price = 10.90;
        } else if (isRegular) {
            price += 15;
        }
    } else if (isSaturday) {
        if (isStudents) {
            price += 9.8;
        }
        else if (isBusiness) {
            price += 15.6;
        } else if (isRegular) {
            price += 20;
        }
    }
    else if (isSunday) {
        if (isStudents) {
            price += 10.46;
        }
        else if (isBusiness) {
            price += 16;
        } else if (isRegular) {
            price += 22.5;
        }
    }
    const totalprice = countOfPerson * price;
    const priceWhitDiscount =
        countOfPerson >= 30 && isStudents ?
            totalprice * 0.85 :
            countOfPerson >= 100 && isBusiness ?
                totalprice = (countOfPerson - 10) * price :
                countOfPerson >= 10 && countOfPerson <= 20 && isRegular ?
                    totalprice = (countOfPerson * price) * 0.95
                    : totalprice;

    console.log(`Total price: ${priceWhitDiscount.toFixed(2)}`);

}

priceForPerson(30, "Students", "Sunday");
priceForPerson(40, "Regular", "Saturday");