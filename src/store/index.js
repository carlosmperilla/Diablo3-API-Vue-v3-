
import { createStore } from 'vuex'
import oauth from './modules/oauth'
import loading from './modules/loading'
import error from './modules/error'

export default createStore({
  modules: {
    oauth,
    loading,
    error,
  }
})
