document.addEventListener('DOMContentLoaded', solve);

function solve() {

  const inputTextarea = document.querySelector('#input textarea');
  const generateButton = document.querySelector('#input input[type="submit"]');
  const tableBody = document.querySelector('tbody');
  const buyButton = document.querySelector('#shop input[type="submit"]');
  const resultTextarea = document.querySelector('#shop textarea');

  generateButton.addEventListener('click', (event) => {
    event.preventDefault();

    const furnitureData = JSON.parse(inputTextarea.value);
    furnitureData.forEach(furniture => {

      const row = document.createElement('tr');


      const imgCell = document.createElement('td');
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      imgCell.appendChild(imgElement);


      const nameCell = document.createElement('td');
      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = furniture.name;
      nameCell.appendChild(nameParagraph);


      const priceCell = document.createElement('td');
      const priceParagraph = document.createElement('p');
      priceParagraph.textContent = furniture.price;
      priceCell.appendChild(priceParagraph);


      const decFactorCell = document.createElement('td');
      const decFactorParagraph = document.createElement('p');
      decFactorParagraph.textContent = furniture.decFactor;
      decFactorCell.appendChild(decFactorParagraph);


      const checkboxCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxCell.appendChild(checkbox);


      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkboxCell);


      tableBody.appendChild(row);
    });
  });

  buyButton.addEventListener('click', (event) => {
    event.preventDefault();

    const rows = Array.from(tableBody.querySelectorAll('tr'));
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let itemCount = 0;

    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        const name = row.children[1].querySelector('p').textContent.trim();
        const price = Number(row.children[2].querySelector('p').textContent.trim());
        const decFactor = Number(row.children[3].querySelector('p').textContent.trim());


        boughtItems.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
        itemCount++;
      }
    });

    const averageDecFactor = itemCount > 0 ? (totalDecFactor / itemCount) : '0.0';

    resultTextarea.value = `Bought furniture: ${boughtItems.join(', ')}\n` +
      `Total price: ${totalPrice}\n` +
      `Average decoration factor: ${averageDecFactor}`;
  });
}





