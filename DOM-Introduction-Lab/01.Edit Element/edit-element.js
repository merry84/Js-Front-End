
function editElement(element,match,replacer) {
    const regex = new RegExp(match, 'g'); 
    element.textContent = element.textContent.replace(regex, replacer);


}

//Another solutions
// function editElement(element,match,replacer) {
  
//     element.textContent = element.textContent.replaceAll(match, replacer);

// }

// function editElement(element,match,replacer) {
      
//     element.textContent = element.textContent.split(match).join(replacer);

// }