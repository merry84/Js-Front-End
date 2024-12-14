function attachEvents() {

const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

const phonebookUl = document.getElementById('phonebook');
const loadButton = document.getElementById('btnLoad');
const createButton = document.getElementById('btnCreate');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');


async function loadPhonebook() {
    phonebookUl.innerHTML = '';

    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Грешка при зареждане на телефонния указател.');
        }

        const data = await response.json();
        Object.entries(data).forEach(([key, { person, phone }]) => {
            const li = document.createElement('li');
            li.textContent = `${person}: ${phone} `;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', async () => {
                await deleteEntry(key);
                loadPhonebook(); 
            });

            li.appendChild(deleteButton);
            phonebookUl.appendChild(li);
        });
    } catch (error) {
        console.error('Грешка:', error);
    }
}

async function createEntry() {
    const person = personInput.value;
    const phone = phoneInput.value;

    if (person === '' || phone === '') {
        alert('Моля, попълнете и двете полета!');
        return;
    }

    const entry = { person, phone };

    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });

        personInput.value = '';
        phoneInput.value = '';
        loadPhonebook();
    } catch (error) {
        console.error('Грешка при създаване на запис:', error);
    }
}


async function deleteEntry(key) {
    try {
        const url = `${baseUrl}/${key}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Грешка при изтриване на запис с ключ ${key}`);
        }
    } catch (error) {
        console.error('Грешка при изтриване:', error);
    }
}

loadButton.addEventListener('click', loadPhonebook);
createButton.addEventListener('click', createEntry);


}

attachEvents();