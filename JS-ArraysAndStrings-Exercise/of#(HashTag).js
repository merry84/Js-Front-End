function stringHashTag(input){
    let splitInput=input.split(" ");
    let withHashTag=[];
    for (const word of splitInput) {
        if(word.startsWith("#") && /^[a-zA-z+$]/.test(word.slice(1))){
            withHashTag.push(word.slice(1));
        }
    }
    withHashTag.forEach(word=>console.log(word));
}
stringHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
//Another solution

// function findSpecialWords(inputString) {
//     // Use a regular expression to find all words starting with # followed by only letters
//     const matches = inputString.match(/#\b[a-zA-Z]+\b/g);
    
//     if (matches) {
//         // Remove the '#' from each match and print each on a new line
//         matches.forEach(word => console.log(word.slice(1)));
//     }
// }
