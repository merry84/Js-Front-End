document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const emailInput = document.querySelector('#email');
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', () => {
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });


}
