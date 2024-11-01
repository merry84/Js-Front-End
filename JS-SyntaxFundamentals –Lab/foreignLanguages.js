let USA;
let England;
let Spain;
let Argentina;
let Mexico;
function solve(country){
    if(country == USA || country == England ){
        console.log('English')
    }
    else if(country== Spain || country == Argentina || country == Mexico){
        console.log('Spanish')
    }
    else{console.log('unknown');

    }
   
}
solve(USA)
solve(Italy)