const fs = require('fs');
let file = 'text.txt'

function contarPalabras(archivo) {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const texto = data.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
        const palabras = texto.split(' ');
        const numeroDePalabras = palabras.filter(palabra => palabra.length > 0).length;

        console.log(numeroDePalabras);
    });
}

contarPalabras(file);
