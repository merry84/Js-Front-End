function loadingBar(x) {
   
    let progress = '%'.repeat(x / 10);  // Each % represents 10% progress
    let remaining = '.'.repeat(10 - x / 10);  // Remaining parts of the bar

    // Combine the progress and remaining parts
    let loadingBar = progress + remaining;

    // Check if the loading is complete
    if (x === 100) {
        console.log("100% Complete!");
        console.log("[" + loadingBar + "]");
    } else {
        console.log(x + "% [" + loadingBar + "]");
        console.log("Still loading...");
    }
}
//Another solution
function loadingBar(x) {
    // Изчисляваме колко процента на барът трябва да са запълнени
    let percentComplete = x / 10;
    // Създаваме зареждащата лента с 'percentComplete' процента като '%', а останалите с '.'
    let loadingBar = '[' + '%'.repeat(percentComplete) + '.'.repeat(10 - percentComplete) + ']';

    // Ако стойността е 100, показваме съобщение за завършен процес
    if (x === 100) {
        console.log("100% Complete!");
        console.log(loadingBar);
    } else {
        console.log(`${x}% ${loadingBar}`);
        console.log("Still loading...");
    }
}