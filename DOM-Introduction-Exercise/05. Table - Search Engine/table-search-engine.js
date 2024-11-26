function solve() {
   const searchText = document.querySelector('#searchField').value.toLowerCase();
   const text = document.querySelectorAll('tbody tr'); //целият ред

   if(searchText =='') return;   
   
   text.forEach(row=>{
       
      const isMatch = row.textContent.toLowerCase().includes(searchText);
      
      row.classList.remove('select'); 

      if(isMatch){
         row.classList.add('select');
      }
   });
   
}