<template>
  <div id="app">
    
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    
    <MainLayout v-else/>

  </div>
</template>

<script setup>
  // Pendiente Pinia
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  import LoadLayout from './layouts/LoadLayout.vue'
  import MainLayout from './layouts/MainLayout.vue'
  import BaseLoading from '@/components/BaseLoading.vue'

  const store = useStore()
  const isLoading = computed(() => store.state.loading.isLoading)
  
  // Obtenemos el token para las consultas
  // Recordemos, usamos root true para disparar la mutación o acción
  // globalmente
  store.dispatch('oauth/getToken', null, { root: true })
</script>

<style lang="stylus">
  #app
    padding 60px 0
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #fff 
    background-color #15202b
</style>
