function getElementsOnNthStep(arr, step) {
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}