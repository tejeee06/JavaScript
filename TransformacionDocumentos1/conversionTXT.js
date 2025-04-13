const fs = require('fs');
const pdf = require('pdf-parse');
const pdPath ='./contrato.pdf'; // Indicamos la ruta donde se encuentra el PDF

//  ARROW FUNCTION para Leer y extraer el contenido del PDF
fs.readFile(pdPath, (err, pdfBuffer) => {
    if (err) {
        console.error("Error al leer el PDF : ", err);
        return;
    }

    // Parseamos el PDF
    pdf(pdfBuffer).then(data => {
        const contingutPdf = data.text;

        // Guardamos el contenido en un archivo TXT
        fs.writeFile('contrato.txt', contingutPdf, (err) => {
            if (err) {
                console.error("Error al guardar a archivo txt", err);
                return;
            }

            console.log("Archivo txt guardado exitosamente");
        })

    }).catch(err => {
        console.error("Error al parsear el PDF : ", err);
    })
})