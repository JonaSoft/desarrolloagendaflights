//importación de archivo json
/*jshint esversion: 8 */
module.exports.cargaMasiva = () => {
    let fs = require('fs');
    let modeloFlights = require('../../server/models/flights')
    setTimeout(() => {
        let archivoOrigen = 'server/assets/importjson8carga.json';
        fs.readFile(archivoOrigen, 'utf8', async(err, data) => {
            if (err) throw err;
            data = data.trim();
            obj = JSON.parse(data);
            let cont = 0
            for (let i in obj) {

                let nombreImagen = obj[i].market + obj[i].flightini + obj[i].fechainit;
                let patron = "/";
                nombreImagen = (nombreImagen.replace(patron, "-"));
                nombreImagen = (nombreImagen.replace(patron, "-"));
                let flight = new modeloFlights({
                    cliente: obj[i].cliente,
                    market: obj[i].market,
                    flightini: obj[i].flightini,
                    origen: obj[i].origen,
                    destino: obj[i].destino,
                    codope: obj[i].codope,
                    fechainit: obj[i].fechainit,
                    fechaend: obj[i].fechaend,
                    frecuencia: obj[i].frecuencia,
                    clase: obj[i].clase,
                    comentario: obj[i].comentario,
                    flightope: obj[i].flightope,
                    timedep: obj[i].timedep,
                    timearr: obj[i].timearr,
                    fechareg: obj[i].fechareg,
                    img: `${nombreImagen}.jpg`
                });
                await flight.save((err, res) => {
                    if (err) {
                        console.log(`registro ${flight.cliente} no grabo`);
                        console.log(err);
                        return
                    };
                    console.log(`cliente ${flight.cliente} agregado`);
                    return
                });

            }
        })
    }, 500)
}