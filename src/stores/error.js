import { defineStore } from "pinia"
import { ref } from 'vue'

export const useErrorStore = defineStore('error', () => {
    const error = ref({})
    function setError(payload) {
        if (typeof payload === "object" && payload !== null) {
           error.value = payload
        } else {
            error.value = {}
        }
    }
    return { error, setError }
})