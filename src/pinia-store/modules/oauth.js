// Importamos nuestra función que obtiene el token
// @ es un alias para /src
import * as oauth from '@/api/oauth'

// Creamos el objeto con "Espacio de Nombres"
export default {
    namespaced: true,
    state: {
        accessToken: null,
    },
    mutations: {
        SET_ACCESS_TOKEN (state, payload) {
            state.accessToken = payload
        }
    },
    actions: {
        // Creamos la función getToken, que recibe como parámetro el objeto `context`
        // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
        getToken ({ commit }) {
            // Layout Loading mientras se adquiere el token.
            commit('loading/SET_LOADING', true, { root: true })
            // Pasos:
            //  1 - Hacer llamada HTTP para obtener el token
            //  2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
            //  3 - Si hay error, limpiar el token de 'accessToken', mostrar log del error

            // Paso 1
            oauth.getToken()
                .then(({ data }) => {
                    // Paso 2: Guardamos el valor del token llamando a nuestra mutación
                    commit('SET_ACCESS_TOKEN', data.access_token)
                })
                .catch((err) => {
                    // Paso 3: En caso de error limpiamos el token
                    commit('SET_ACCESS_TOKEN', null)
                    console.log('Error Oauth', err)
                })
                .finally(() => {
                    // Ya adquirido el token se retira el
                    // layout loading
                    commit('loading/SET_LOADING', false, { root: true })
                })
        }
    },
}