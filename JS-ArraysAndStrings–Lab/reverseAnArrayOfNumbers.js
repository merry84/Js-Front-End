// function reverseAndPrint(n, arr) {
//     const result = [];    
//     
//     for (let i = n - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }    
//    
//     console.log(result.join(" "));
// }

//another solution


// function reverseAndPrint(n, arr) {
    
//     const result = arr.slice(0, n).reverse().join(" ");
    
//     console.log(result);
// }
 

 function reverseAndPrint(n, arr) {
    const result = [];
    
    //  add the first n elements to the result array
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
    
    //  reverse order
    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        output += result[i] + " ";
    }
    
    console.log(output.trim()); 
}
 reverseAndPrint(3, [10, 20, 30, 40, 50]);
