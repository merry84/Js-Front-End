function solve() {
  const text = document.getElementById("text").value.toLowerCase();
  const convention = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const words = text.split(' ').map(word => word.trim());
  let result;

  if (convention === "Camel Case") {
      result = words.map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  } else if (convention === "Pascal Case") {
      result = words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
  } else {
      result = "Error!";
  }

  resultElement.textContent = result;
}

// function solve() {

//   const input = document.querySelector('#text').value.toLowerCase().split(' ');
//   const convention = document.querySelector('#naming-convention').value.toLowerCase().trim();
//   const resultEl = document.querySelector('#result');

//   function capitaliseWord(word) {
//       return word[0].toUpperCase() + word.slice(1);
//   }

//   switch (convention) {
//       case 'camel case':
//           break;
//       case 'pascal case':
//           resultEl.textContent = input.map(capitaliseWord).join('');
//           break;
//       default:
//           resultEl.textContent = 'Error!';
//   }
// }
