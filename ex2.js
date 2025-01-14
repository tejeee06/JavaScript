const abecedari = ['a','b','c','d','e'];

function invertirVector(vec) {

    for( let i = abecedari.length - 1; i >= 0; i--) {

        console.log(`${abecedari[i]}`);

    }
} 

console.log(invertirVector(abecedari));