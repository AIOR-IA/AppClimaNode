const axios = require('axios');


const clima = async(latitud, longitud) => {
    const resultado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=384888efdff4170acad8ec0a354355e5&units=metric`);


    return resultado.data.main.temp;
}


module.exports = {
    clima,

}