function obtenerFechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
  
    return `${dia}/${mes}/${anio}`;
  }
  
  console.log(obtenerFechaActual())