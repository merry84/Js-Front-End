function calculateTicketPrice(dayType, age) {
    let price;

    if (age >= 0 && age <= 18) {
        if (dayType === "Weekday") {
            price = 12;
        } else if (dayType === "Weekend") {
            price = 15;
        } else if (dayType === "Holiday") {
            price = 5;
        } else {
            return "Error!";
        }
    } else if (age > 18 && age <= 64) {
        if (dayType === "Weekday") {
            price = 18;
        } else if (dayType === "Weekend") {
            price = 20;
        } else if (dayType === "Holiday") {
            price = 12;
        } else {
            return "Error!";
        }
    } else if (age > 64 && age <= 122) {
        if (dayType === "Weekday") {
            price = 12;
        } else if (dayType === "Weekend") {
            price = 15;
        } else if (dayType === "Holiday") {
            price = 10;
        } else {
            return "Error!";
        }
    } else {
        return "Error!"; 
    }

    return `${price}$`;
}