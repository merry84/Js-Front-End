function processNumber(start, op1, op2, op3, op4, op5) {
    let number = Number(start);
    const operations = [op1, op2, op3, op4, op5];

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
            default:
                console.log(`Unknown operation: ${operation}`);
        }
        console.log(number);
    }
}