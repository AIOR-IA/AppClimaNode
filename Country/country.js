const axios = require('axios');




const Weather = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,

        headers: { 'x-rapidapi-key': '420bb35457mshd4bf8e9c6d9a86ap1999e5jsnb2fbef9ed8d6' }
    });

    const resp = await instance.get();
    const dir = resp.data.Results[0];
    const name = dir.name;
    const lat = dir.lat;
    const lon = dir.lon;
    return {
        name,
        lat,
        lon
    }
}
module.exports = {
    Weather
}