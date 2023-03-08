import { defineStore } from "pinia"
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
    const isLoading = ref(false)
    function setLoading(payload) {
        isLoading.value = payload
    }
    return { isLoading, setLoading }
})