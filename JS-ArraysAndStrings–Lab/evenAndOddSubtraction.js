function calculateDifference(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    
    return evenSum - oddSum;
}


// function calculateDifference(arr) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i];
//         } else {
//             oddSum += arr[i];
//         }
//     }

//     return evenSum - oddSum;
// }