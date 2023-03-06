// Axios para hacer la llamada HTTP
// const axios = require("axios").default;
import axios from 'axios';
const get = axios.get;
// Store, donce tenemos almacenado nuestro token
import store from '../store/index'
// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región
import { locales } from '../utils/regions'

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = 'https://'
const host = '.api.blizzard.com/'


/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * Los parámetros que hemos obtenido a través de la URL
 *  - @param region {String}
 *  - @param account {String}
 * @returns {Promise}
 */
function getApiAccount ({ region, account }) {
    // Recurso de la API al que queremos acceder
    const resource = `d3/profile/${account}/`
    // API URL completa
    const API_URL = `${protocol}${region}${host}${resource}`
    // Locale
    const locale = locales[region]
  
    // Parámetros:
    // - Token de acceso (recuperado desde Vuex)
    // - Locale
    const params = {
      access_token: store.state.oauth.accessToken,
      locale
    }
  
    // Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
    // que controlaremos (éxito / error) desde el componente
    return get(API_URL, { params })
}

/**
 * Returns a single hero
 * GET – /d3/profile/{account}/hero/{heroId}
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    'access_token': store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

  export {
    getApiAccount,
    getApiHero,
    getApiDetailedHeroItems,
  }
