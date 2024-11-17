function createPerson(firstName,lastName,hairColor){
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    } ;
    const jsonString=JSON.stringify(person);
    console.log(jsonString);
    
}
function createPerson(name, lastName, hairColor) {
    // Create and convert the object to JSON in a single step
    console.log(JSON.stringify({ name, lastName, hairColor }));
}
createPerson("John", "Doe", "Brown");