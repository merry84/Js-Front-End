
function catsInfo(input) {
    class Cat{
        constructor(name,age){
            this.name= name;
            this.age= age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }
    /*createCats функция:
Вместо да създаваме котката поотделно и да извикваме метода в рамките на forEach, тук използваме map() метод за създаване на нов масив от котки.
map() преминава през всички входни данни и за всяка стойност извиква split(' ') за разделяне на името и възрастта. След това създава нов обект Cat и го добавя в масива cats.
След това използваме forEach() за извикване на метода meow() за всяка котка. */
   const cats= input.map(element => {
        const[name,age]=element.split(' ');
        const cat = new Cat(name,parseInt(age));
        return cat;
    });
    cats.forEach(cat => cat.meow());    
    
}
catsInfo(['Mellow 2', 'Tom 5']);