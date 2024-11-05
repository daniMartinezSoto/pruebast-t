import * as data from './datos.js';

document.getElementById("boton1").addEventListener("click", () => {
    // Llama a genFaction con los arrays `tiposDeSeres` y `tiposDeOrganizaciones` de `data`
    const faction = genFaction(data.tiposDeSeres, data.tiposDeOrganizaciones, data.colores, data.temas, data.ubicaciones);
  
    document.getElementById("resultadoFaction").innerHTML = faction;
});

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function genFaction(array1, array2, array3, array4, array5) {
    // Selecciona aleatoriamente entre los patrones
    let seresOOrganizacion = Math.random() < 0.5 ? randomElement(array1) : randomElement(array2);
    
    // Genera un solo número aleatorio para seleccionar entre color, tema o ubicación
    let randomValue = Math.random();

    let colorOTemaOUbicacion;
    if (randomValue < 0.3) {
        colorOTemaOUbicacion = randomElement(array3); // 30% de probabilidad
    } else if (randomValue < 0.8) {
        colorOTemaOUbicacion = randomElement(array4); // 50% de probabilidad
    } else {
        colorOTemaOUbicacion = randomElement(array5); // 20% de probabilidad
    }
    
    // Devuelve la facción aleatoria
    return `${seresOOrganizacion} ${colorOTemaOUbicacion}`;
}




