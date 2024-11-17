function contacts(input) {
    
    const phoneBook={};//empty

    input.forEach(el => {
        const[name,number]= el.split(' ');
        // Записва или обновява телефонния номер за всяко име
        phoneBook[name]=number;
    });

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
        
    }
}
contacts(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )