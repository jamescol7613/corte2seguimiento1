const sumaDigitos = num => {
    const numString = Math.abs(num).toString();
    let suma = 0;

    for (let i = 0; i < numString.length; i++) {
        suma += parseInt(numString[i]);
    }

    return suma;
}

console.log(sumaDigitos(12345))
console.log(sumaDigitos(-67))
console.log(sumaDigitos(0))