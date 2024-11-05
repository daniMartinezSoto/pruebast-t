import * as data from './datos.js';

document.getElementById("boton1").addEventListener("click", () => {
    // Llama a genFaction con los arrays `tiposDeSeres` y `tiposDeOrganizaciones` de `data`
    const faction = genFaction(data.tiposDeSeres, data.tiposDeOrganizaciones, data.colores, data.temas, data.ubicaciones);
  
    document.getElementById("resultadoFaction").innerHTML=  faction;
});

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function genFaction(array1, array2, array3, array4, array5) {
    // Selecciona aleatoriamente entre los patrones
    let seresOOrganizacion = Math.random() < 0.5 ? randomElement(array1) : randomElement(array2);
    let colorOTemaOUbicacion = Math.random() < 0.3 ? randomElement(array3) : Math.random() < 0.8 ? randomElement(array4) : randomElement(array5);
    
    // Devuelve la facción aleatoria
    return `${seresOOrganizacion} ${colorOTemaOUbicacion}`;
}








// Ejemplos de cómo usar los arrays importados
const randomSer = randomElement(data.tiposDeSeres);
console.log("Ser aleatorio:", randomSer);

const randomOrg = randomElement(data.tiposDeOrganizaciones);
console.log("Organización aleatoria:", randomOrg);

const randomColor = randomElement(data.colores);
console.log("Color aleatorio:", randomColor);

