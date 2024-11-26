function solve() {
  const textArea = document.querySelector('#input').value;
  const outputText = document.querySelector('#output');

  // Разделяме текста на изречения
  let sentences = textArea.split('.').filter(sentence => sentence.trim().length > 0);

  // Изчистваме предишния изход
  outputText.innerHTML = '';

  if (sentences.length === 0) {
    return; // Ако няма изречения
  }

  let paragraphContent = '';

  // Групираме изреченията по 3 и създаваме параграфи
  for (let i = 0; i < sentences.length; i++) {

    paragraphContent = sentences[i].trim() + '.';

    if ((i + 1) % 3 === 0 || i === sentences.length - 1) {

      const paragraph = document.createElement('p');
      paragraph.textContent = paragraphContent.trim();
      outputText.appendChild(paragraph);
      paragraphContent = '';

    }
  }
}