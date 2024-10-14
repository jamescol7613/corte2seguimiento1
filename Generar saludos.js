//Funcion tradicional

function saludar1(nombre) {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar1('Carlos'))

//Funcion flecha

const saludar = nombre => `¡Hola, ${nombre}!`;

console.log(saludar('Carlos'))