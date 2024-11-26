function solve() {

   const searchText = document.querySelector('#searchText').value.toLowerCase();
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const resultElement = document.querySelector('#result');
   
   let matches = 0;

   // Изчистваме резултатa
   towns.forEach(town => {
       town.style.fontWeight = 'normal';
       town.style.textDecoration = 'none';
   });

   // Търсим съвпадения
   towns.forEach(town => {
       if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
           matches++;
           town.style.fontWeight = 'bold';
           town.style.textDecoration = 'underline';
             /* font-weight: bold; */
            /* text-decoration: underline; */
       }
   });

  
   resultElement.textContent = `${matches} matches found`;
}
