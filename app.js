const argv = require('./Config/yargs').argv;
const dir = require('./Country/country.js').Weather;
const temperatura = require('./Clima/clima').clima;

let ubi = argv.direccion;
const GetInfo = async(ubic) => {
    try {
        const ubicacion = await dir(ubic);
        const clima = await temperatura(ubicacion.lat, ubicacion.lon);
        return (`Ciudad ${ubicacion.name} la temperatura es ${clima}`);
    } catch (e) {
        return (`Error al momento de obtener el Clima de dicho Lugar ${e}`);
    }
}

GetInfo(ubi)
    .then(resp => {
        console.log(resp);
    })
    .catch(error => {
        console.log(error);
    })

// dir(argv.direccion)
//     .then(res => {
//         temperatura(res.lat, res.lon).then(resp => {
//                 console.log('Temperatura correcta', resp);
//             })
//             .catch(error => {
//                 console.log(error);
//             });

//     })
//     .catch(error => {
//         console.log(error);
//     })