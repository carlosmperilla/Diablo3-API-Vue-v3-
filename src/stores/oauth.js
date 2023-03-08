import { defineStore } from "pinia"
import { useLoadingStore } from './loading'
import { ref } from "vue"

// Importamos nuestra función que obtiene el token
// @ es un alias para /src
import * as oauth from '@/api/oauth'


export const useOauthStore = defineStore('oauth', () => {
    const loadingStore = useLoadingStore()
    
    const accessToken = ref('')
    
    function setAccessToken(payload) {
      accessToken.value = payload
    }
    
    // Creamos la función getToken, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
    function getToken () {
        // Layout Loading mientras se adquiere el token.
        loadingStore.setLoading(true)
        // Pasos:
        //  1 - Hacer llamada HTTP para obtener el token
        //  2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
        //  3 - Si hay error, limpiar el token de 'accessToken', mostrar log del error

        // Paso 1
        oauth.getToken()
            .then(({ data }) => {
                // Paso 2: Guardamos el valor del token llamando a nuestra mutación
                // commit('SET_ACCESS_TOKEN', data.access_token)
                setAccessToken(data.access_token)
            })
            .catch((err) => {
                // Paso 3: En caso de error limpiamos el token
                setAccessToken('')
                console.log('Error Oauth', err)
            })
            .finally(() => {
                // Ya adquirido el token se retira el
                // layout loading
                loadingStore.setLoading(false)
            })
    }

    return { accessToken, setAccessToken, getToken }

  })