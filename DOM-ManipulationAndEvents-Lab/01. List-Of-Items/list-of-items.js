function addItem() {
    const listItems = document.querySelector('#items');
    const newItem = document.querySelector('#newItemText');
    
    if (newItem.value == '') return;
    const newLi = document.createElement('li');

    newLi.textContent = newItem.value;
    listItems.appendChild(newLi);

    newItem.value = '';
}
