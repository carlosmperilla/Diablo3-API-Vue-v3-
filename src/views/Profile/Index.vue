<template>
    <div>
      <BaseLoading v-if="isLoading"/>

      <template v-if="isFillProfileData">
        <MainBlock :profile-data="profileData"/>
        <ArtisansBlock :artisans-data="artisansData"/>
      </template>

    </div>
</template>
  
<script setup>
    // Pendiente Pinia
    import { ref, reactive, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    import handlerSetApiErr from '@/reusable/setError'
    import { getApiAccount } from '@/api/search'
    
    import BaseLoading from '@/components/BaseLoading.vue'
    import MainBlock from './MainBlock/Index.vue'
    import ArtisansBlock from './ArtisansBlock/Index.vue'

    const setApiErr = handlerSetApiErr()
    const route = useRoute()
    const router = useRouter()

    const isLoading = ref(true)
    const profileData = reactive({})
    // Para usar battleTag:
    // https://us.diablo3.blizzard.com/es-mx/rankings/era/18/rift-barbarian
    const { region, battleTag: account } = route.params

    /**
     * Obtener los datos de la API
     * Guardarlos en 'profileData'
     */
    function fetchData (region, account) {
        // Llamada a la API con los datos necesarios
        getApiAccount({ region, account })
            .then(({ data }) => {
                Object.assign(profileData, data)
            })
            .catch((err) => {
                // Creamos el objeto error
                const errObj = {
                    routeParams: route.params,
                    message: err.message
                }
                if (err.response) {
                    errObj.data = err.response.data
                    errObj.status = err.response.status
                }
                // Hacemos uso del Mixin
                // Guardamos el objeto en el Store
                setApiErr(errObj)
                // Navegamos a la ruta de nombre 'Error'
                router.push({ name: 'Error' })
            })
            .finally(() => {
                isLoading.value = false
            })
    }

    // Llamada a la API
    fetchData(region, account)

    const artisansData = computed(() => {
        return {
            blacksmith: profileData.blacksmith,
            blacksmithHardcore: profileData.blacksmithHardcore,
            jeweler: profileData.jeweler,
            jewelerHardcore: profileData.jewelerHardcore,
            mystic: profileData.mystic,
            mysticHardcore: profileData.mysticHardcore
        }
    })

    // Para verificar si ya se llenaron los datos
    const isFillProfileData = computed(() => Object.keys(profileData).length !== 0)
</script>