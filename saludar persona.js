const saludarPersona = (nombre, idioma = "es") => {
    if (idioma === "es") {
            return `¡Hola, ${nombre}!`
    }
}

console.log(saludarPersona("Carlos"))