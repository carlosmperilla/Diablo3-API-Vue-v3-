import { useErrorStore } from '@/stores/error'


export default function handlerSetApiErr(){
  const store = useErrorStore()
  /**
  * API response error.
  * @param params {Object || null} Error Object
  */
  const setApiErr = (params) => {
    store.setError(params)
  }
  return setApiErr
}