function sumTable() {

    const cells = Array.from(document.querySelectorAll('tr td:nth-child(2)'));

    // Използваме reduce,за да съберем стойностите
    const total = cells
        .map(cell => Number(cell.innerText))
        .reduce((acc, current) => acc + current, 0); //Сумираме всички стойности kато започваме от 0

    
    document.querySelector('#sum').innerText = total;
}
//Another solutions
// function sumTable() {
   
//     const numberCol= document.querySelectorAll('tr td:nth-of-type(2)');
 
//     const total= Array.from(numberCol)
//     .reduce((acc,num)=>
//      acc+Number(num.textContent),0);
 
 
//     document.querySelector('#sum').innerText= total;
    
//      // <tbody>
//      //    <tr>
//      //      <td>Beer</td>
//      //      <td>2.88</td>
//      //    </tr>
//      //    <tr>
//      //      <td>Fries</td>
//      //      <td>2.15</td>
//      //    </tr>
//      //    <tr>
//      //       <td>Burger</td>
//      //       <td>4.59</td>
//      //    </tr>
//      //    <tr>
//      //       <td>Total:</td>
//      //       <td id="sum"></td>
//      //    </tr>
//      // </tbody>
    
//  }