document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const inputText = document.querySelector('input[type="text"]').value;
   const content = document.querySelector('#content');

   document.querySelector('#task-input').addEventListener('submit', (e) => {
      e.preventDefault();
      const section = inputText.split(', ').map(section => section.trim());

      section.forEach(element => {
         const newDiv = document.createElement('div');
         const newP = document.createElement('p');

         newP.textContent = element;
         newP.style.display = 'none';

         newDiv.append(newP);
         
         newDiv.addEventListener('click',(e)=>{
            e.target.querySelector('p').style.display='block';
         });

         content.append(newDiv);
      });

   });

}