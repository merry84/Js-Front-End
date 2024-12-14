document.addEventListener('DOMContentLoaded', solve);

function solve() {
   document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const textItem= document.querySelector('#newItemText').value;
    const itemValue= document.querySelector('#newItemValue').value;

    const option = document.createElement('option');
    option.textContent = textItem;
    option.value=itemValue;

    const menu= document.querySelector('#menu');
    menu.appendChild(option); 

    document.querySelector('#newItemText').value ='';
    document.querySelector('#newItemValue').value= '';

   });
}