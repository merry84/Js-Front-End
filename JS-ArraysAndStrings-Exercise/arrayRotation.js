function rotateArray(arr, rotations) {
    rotations = rotations % arr.length; // Намаляване на броя ротации до дължината на масива
    
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift(); // Премахване на първия елемент
        arr.push(firstElement);         // Добавяне на премахнатия елемент в края
    }
    
    console.log(arr.join(" "));
}