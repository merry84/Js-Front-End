function addItem() {
    const listItems = document.querySelector('#items');
    const newItem = document.querySelector('#newItemText');

    if (newItem.value == '') return;
    const newLi = document.createElement('li');

    newLi.textContent = newItem.value;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    
    //При натискане на линка се изпълнява функцията, която премахва родителския <li> елемент от списъка.
    //Използваме метода removeChild, за да премахнем конкретния <li> от неговия родител <ul>.
    deleteLink.addEventListener('click', function (e) {
        e.preventDefault();//да не презарежда страницата
        listItems.removeChild(newLi);
    });

    newLi.appendChild(deleteLink);
    listItems.appendChild(newLi);

    newItem.value = '';
}
