let nombre = 874322;
let contador = 0;
let numerosDivisibles = [];

for(let i = 0; i < 874322; i++) {

    if( nombre % i == 0) {

        numerosDivisibles[contador] = i;
        contador ++;

    }
}

for( let i =0; i < numerosDivisibles.length; i++) {

    console.log(numerosDivisibles[i]);
    
}
