function extract(content) {
    const text = document.querySelector('#' + content).textContent;
    const regexPattern = /\(([^)]+)\)/g;

    const matches = text.match(regexPattern);
    return matches.join(';');
}
/*
function extract(content) {
    const text = document.querySelector('#content').textContent;
    const regexPattern = /\(([^)]+)\)/g;

    const matches = text.match(regexPattern);
    return matches.join(';');
}
*/