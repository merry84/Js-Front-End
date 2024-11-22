

function parkingLotManagement(entries) {
    const parkingLot = [];
    for (const entry of entries) {
        const [direction, carNumber] = entry.split(', ');
        if (direction === "IN") {

            if (!parkingLot.includes(carNumber)) {
                parkingLot.push(carNumber);
            }
        } else if (direction === "OUT") {

            const index = parkingLot.indexOf(carNumber);
            if (index !== -1) {
                parkingLot.splice(index, 1); // Премахване по индекс 1 номер на кола
            }
        }
    }


    if (parkingLot.length > 0) {
        console.log(parkingLot.sort().join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    }
}






parkingLotManagement(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
