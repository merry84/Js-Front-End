document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    const encodeButton = document.querySelector('#encode button');
    const decodeButton = document.querySelector('#decode button');
    const senderTextarea = document.querySelector('#encode textarea');
    const receiverTextarea = document.querySelector('#decode textarea');

    // Функция за кодиране.
    encodeButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const message = senderTextarea.value;
        const encodedMessage = message
            .split('') 
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1)) // Увеличаваме ASCII стойността с 1.
            .join(''); 

       
        receiverTextarea.value = encodedMessage;
        senderTextarea.value = ''; 
    });

   
    decodeButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        
        const encodedMessage = receiverTextarea.value;
        const decodedMessage = encodedMessage
            .split('') 
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1)) // Намаляваме ASCII стойността с 1.
            .join('');

        
        receiverTextarea.value = decodedMessage;
    });
}
