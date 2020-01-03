const argv = require('yargs').options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la direccion para obtener el clima'
        }
    })
    .help()
    .argv;





module.exports = {
    argv
}