function extractText() {

    const items = [...document.querySelector('#items').children];
    const textarea = document.querySelector('#result');



    const listItemsText = Array.from(items)
        .map(item => item.textContent)
        .join('\n'); // Свързваме ги с нови редове

    // Поставяме събраните текстове в текстовото поле
    textarea.value = listItemsText;

}