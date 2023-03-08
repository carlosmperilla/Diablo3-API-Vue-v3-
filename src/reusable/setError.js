import { useStore } from 'vuex'

export default function handlerSetApiErr(){
  const store = useStore()
  /**
  * API response error.
  * @param params {Object || null} Error Object
  */
  const setApiErr = (params) => {
    store.commit('error/SET_ERROR', params)
  }
  return setApiErr
}