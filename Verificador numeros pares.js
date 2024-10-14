//Funcion tradcicional

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4))
console.log(esPar(7))

//Funcion flecha

const esParFlecha = numero => numero % 2 === 0;

console.log(esParFlecha(4))
console.log(esParFlecha(7))