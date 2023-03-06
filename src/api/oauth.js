// Traemos el método post de 'axios'
// Para más información del cambio
// https://github.com/axios/axios/issues/5038#issuecomment-1270982590
// import { post } from 'axios'
// const axios = require("axios").default;

import axios from 'axios';
const post = axios.post


// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API. 
// 🔥 Estos datos deberían ser privado
// Recordar que en local debe reiniciarse el servidor si,
// para que pueda leer lar variables de entorno.
// const clientId = process.env.VUE_APP_CLIENT_ID
// const clientSecret = process.env.VUE_APP_CLIENT_SECRET
const clientId = import.meta.env.VITE_CLIENT_ID
const clientSecret = import.meta.env.VITE_CLIENT_SECRET

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

// Creamos la función getToken
function getToken() {
    // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
    const body = new FormData()

    // Con 'append', le agregamos la clave 'grant_type' y el valor 'client_credentials'
    body.append('grant_type', 'client_credentials')

    // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
    // que necesitamos para hacer la llamada.
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        // Nuestros datos de cliente para OAuth: id y secret
        auth: { username: clientId, password: clientSecret }
    }

    // Hacemos una peticion POST
    // Le pasamos la URL como primer parámetro
    // Como segundo, el body, que es un FormData
    // Y la configuración como tercer argumento
    return post(API_URL, body, config)
}

// Exportamos la función para poder usarla más tarde
export {
    getToken
}