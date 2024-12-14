function attachEvents() {
    
const baseUrl = 'http://localhost:3030/jsonstore/messenger';


const messagesArea = document.getElementById('messages');
const nameInput = document.querySelector('input[name="author"]');
const contentInput = document.querySelector('input[name="content"]');
const sendButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');


async function sendMessage() {
    const author = nameInput.value;
    const content = contentInput.value;

    if (author === '' || content === '') {
        alert('Моля, попълнете и двете полета!');
        return;
    }

    const message = {
        author,
        content
    };

    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        nameInput.value = '';
        contentInput.value = '';
    } catch (error) {
        console.error('Грешка при изпращане:', error);
    }
}


async function refreshMessages() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Грешка при извличане на съобщения.');
        }

        const data = await response.json();
        messagesArea.value = Object.values(data)
            .map(({ author, content }) => `${author}: ${content}`)
            .join('\n');
    } catch (error) {
        console.error('Грешка при обновяване:', error);
    }
}

sendButton.addEventListener('click', sendMessage);
refreshButton.addEventListener('click', refreshMessages);

}

attachEvents();

