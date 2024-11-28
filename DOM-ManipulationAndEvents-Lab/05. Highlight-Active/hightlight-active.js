document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const inputs = document.querySelectorAll('input[type="text"]');
 
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Добавяме клас 'focused' към родителския елемент на input
            input.parentElement.classList.add('focused');
        });

        // Добавяме събитие 'blur' (когато полето губи фокус)
        input.addEventListener('blur', () => {

            // Премахваме класа 'focused' от родителя
            input.parentElement.classList.remove('focused');
        });
    });


}