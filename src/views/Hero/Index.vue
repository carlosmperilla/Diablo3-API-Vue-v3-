<template>
    <div class="hero-view">
        <BaseLoading v-if="isLoadingHero"/>
        <HeroDetailHeader v-if="isFillHero" :detail="detailHeader"/>
        
    <b-row>
      <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  -->
      <!-- En 'lg' orden 2 -->
      <b-col md='12' lg='8' order-lg='2'>
        <BaseLoading v-if='isLoadingItems'/>
        <!-- Componente de Items del personaje -->
        <HeroItem v-if="isFillItems" :items="items"/>
      </b-col>

      <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
      <!-- En 'lg' orden 1 -->
      <b-col md='12' lg='4' order-lg='1'>
        <template v-if='isFillHero'>
          <HeroAttributes :attributes='detailStats'/>
          <HeroSkills :skills='hero.skills'/>
        </template>
      </b-col>

    </b-row>
    </div>
</template>

<script setup>
    // Pendiente Pinia
    import { ref, reactive, computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    import handlerSetApiErr from '@/reusable/setError'
    import { getApiHero, getApiDetailedHeroItems } from '@/api/search'
    
    import BaseLoading from '@/components/BaseLoading.vue'
    import HeroDetailHeader from './HeroDetailHeader.vue'
    import HeroAttributes from './HeroAttributes/Index.vue'
    import HeroSkills from './HeroSkills/Index.vue'
    import HeroItem from './HeroItems/Index.vue'

    const setApiErr = handlerSetApiErr()
    const route = useRoute()
    const router = useRouter()

    const isLoadingHero = ref(true)
    const isLoadingItems = ref(true)
    
    const hero = reactive({})
    const items = reactive({})
    
    const { region, battleTag: account, heroId } = route.params

    getApiHero({ region, account, heroId })
        .then(({ data }) => {
            Object.assign(hero, data)
        })
        .catch((err) => {
            const errObj = {
                routeParams: route.params,
                message: err.message
            }
            if (err.response) {
                errObj.data = err.response.data
                errObj.status = err.response.status
            }
            setApiErr(errObj)
            router.push({ name: 'Error' })
        })
        .finally(() => {
            isLoadingHero.value = false
        })

    getApiDetailedHeroItems({ region, account, heroId })
        .then(({ data }) => {
            Object.assign(items, data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            isLoadingItems.value = false
        })


    const detailHeader = computed(() => {
        // Asignamos valores a través de 
        const {
            name,
            // valor: alias
            class: classSlug,
            gender,
            level,
            hardcore,
            seasonal,
            paragonLevel,
            alive,
            seasonCreated
        } = hero

        return {
            name,
            classSlug,
            gender,
            level,
            hardcore,
            seasonal,
            paragonLevel,
            alive,
            seasonCreated
        }
    })

    const detailStats = computed(() => {
        // Devuelve el contenido de stats y agrega classSlug
        return { ...hero.stats, classSlug: hero.class }
    })

    // Para verificar si ya se llenaron los datos
    const isFillHero = computed(() => Object.keys(hero).length !== 0)
    const isFillItems = computed(() => Object.keys(items).length !== 0)

</script>