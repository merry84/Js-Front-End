function sortSpecial(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);// a-b -> numbers

    const result = [];
    let left = 0; // Pointer to the smallest element
    let right = arr.length - 1; // Pointer to the largest element

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]); // When both pointers meet, add the last element
        } else {
            result.push(arr[left]); // Add the smallest
            result.push(arr[right]); // Add the largest
        }
        left++; // Move pointer to the right
        right--; // Move pointer to the left
    }

    return result;
}
// Another solution 

// function sortSpecial(arr) {
//     // Сортиране на масива в нарастващ ред
//     arr.sort((a, b) => a - b);

//     const result = [];
//     const mid = Math.ceil(arr.length / 2); // Намираме средната позиция

//     // Разделяме масива на две части
//     const smalls = arr.slice(0, mid); // Първата половина (най-малките елементи)
//     const bigs = arr.slice(mid).reverse(); // Втората половина (най-големите елементи, обръщаме реда)

//     // Редуваме елементите
//     for (let i = 0; i < smalls.length; i++) {
//         result.push(smalls[i]); // Добавяме най-малкия
//         if (bigs[i] !== undefined) { // Проверяваме дали има съответстващ елемент
//             result.push(bigs[i]); // Добавяме най-голямия
//         }
//     }

//     return result;
// }