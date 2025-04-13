const { DOMParser } = require('xmldom'); // Compatibilitat DOMPARSER amb Node

// Funcion que transforma el xml a Json
function xmlToJson(xmlString) {
    const parser = new DOMParser(); // Parser para datos estrucuturados
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const alumnes = xmlDoc.getElementsByTagName("alumno");
    const result = { alumnes: [] }; // Diccionario y listas donde guardaremos los datos

    // Bucle principal de la funcion , se encarga de pasar el texto a Json y añadirlo al Diccionario
    for (let i = 0; i < alumnes.length; i++) {
        const alumno = alumnes[i];
        const obj = {
            nombre: alumno.getElementsByTagName("nombre")[0].textContent,
            edad: parseInt(alumno.getElementsByTagName("edad")[0].textContent),
            curso: alumno.getElementsByTagName("curso")[0].textContent
        };
        result.alumnes.push(obj);
    }

    // Especifico para convertir a JSON
    return JSON.stringify(result, null, 2);
}

const xmlString = `<alumnos>
  <alumno>
    <nombre>Ana Martínez</nombre>
    <edad>21</edad>
    <curso>DAW</curso>
  </alumno>
  <alumno>
    <nombre>Carlos Gómez</nombre>
    <edad>22</edad>
    <curso>DAM</curso>
  </alumno>
</alumnos>`;

const jsonResult = xmlToJson(xmlString);
console.log(jsonResult);