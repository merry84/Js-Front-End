document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
    document.querySelector('main').addEventListener('click', (e) => {
       
        if (e.target.nodeName !== 'BUTTON') return;

        const profile = e.target.closest('.profile'); // Намираме родителския профил
        
        const radioButtonId = profile.querySelector('.radio-group input:checked').getAttribute('id');

      
        if (radioButtonId.includes('Lock')) return;

        // Променяме видимостта на допълнителните полета
        toggleHiddenFields(profile, e.target);
    });

    function toggleHiddenFields(profile, button) {

        const hiddenFields = profile.querySelector('.hidden-fields');

      
        if (hiddenFields.classList.contains('active')) {

            hiddenFields.classList.remove('active');
            button.textContent = 'Show more';

        } else {

            hiddenFields.classList.add('active');
            button.textContent = 'Show less';
        }
    }
}


