<template>
    <div class="hero-view">
        <BaseLoading v-if="isLoadingHero"/>
        <HeroDetailHeader v-if="hero" :detail="detailHeader"/>
        
    <b-row>
      <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  -->
      <!-- En 'lg' orden 2 -->
      <b-col md='12' lg='8' order-lg='2'>
        <BaseLoading v-if='isLoadingItems'/>
        <!-- Componente de Items del personaje -->
        <HeroItem v-if="items" :items="items"/>
      </b-col>

      <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
      <!-- En 'lg' orden 1 -->
      <b-col md='12' lg='4' order-lg='1'>
        <template v-if='hero'>
          <HeroAttributes :attributes='detailStats'/>
          <HeroSkills :skills='hero.skills'/>
        </template>
      </b-col>

    </b-row>
    </div>
</template>
  
<script>
    // Pendiente Composition API
    // Problablemente sea mejor hacerlo despues de 
    // pasar de Vuex a Pinia
    // setError
    import setError from '@/mixins/setError'
    import { getApiHero, getApiDetailedHeroItems } from '@/api/search'
    
    import BaseLoading from '@/components/BaseLoading.vue'
    import HeroDetailHeader from './HeroDetailHeader.vue'
    import HeroAttributes from './HeroAttributes/Index.vue'
    import HeroSkills from './HeroSkills/Index.vue'
    import HeroItem from './HeroItems/Index.vue'

    export default {
        name: 'HeroView',
        mixins: [setError],
        components: { 
            BaseLoading,
            HeroDetailHeader,
            HeroAttributes,
            HeroSkills,
            HeroItem,
        },
        data () {
            return {
                isLoadingHero: false,
                isLoadingItems: false,
                hero: null,
                items: null,
            }
        },
        computed: {
            detailHeader () {
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
                } = this.hero

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
            },
            detailStats () {
                // Devuelve el contenido de stats y agrega classSlug
                return { ...this.hero.stats, classSlug: this.hero.class }
            }
        },
        created () {
            this.isLoadingHero = true
            this.isLoadingItems = true
            const { region, battleTag: account, heroId } = this.$route.params

            getApiHero({ region, account, heroId })
                .then(({ data }) => {
                    this.hero = data
                })
                .catch((err) => {
                    this.hero = null
                    this.errObj = {
                        routeParams: this.$route.params,
                        message: err.message
                    }
                    if (err.response) {
                        arrObj.data = err.response.data
                        arrObj.status = err.response.status
                    }
                    this.setApiErr(errObj)
                    this.$router.push({ name: 'Error' })
                })
                .finally(() => {
                    this.isLoadingHero = false
                })

            getApiDetailedHeroItems({ region, account, heroId })
                .then(({ data }) => {
                    this.items = data
                })
                .catch((err) => {
                    this.items = null
                    console.log(err)
                })
                .finally(() => {
                    this.isLoadingItems = false
                })
        }
    }
</script>