function substring(string, startIndex, count) {
    let output;
    output = string.substring(startIndex, count + startIndex);
    console.log(output);
}
//function substring(s, start, count) {
// Extract the substring using the slice method
//const result = s.slice(start, start + count);
//console.log(result);
//}

substring('ASentence', 1, 8);