<template>
  <div id="app">
    
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    
    <MainLayout v-else/>

  </div>
</template>

<script setup>
  import { computed } from 'vue'

  import { useLoadingStore } from './stores/loading'
  import { useOauthStore } from './stores/oauth'

  import LoadLayout from './layouts/LoadLayout.vue'
  import MainLayout from './layouts/MainLayout.vue'
  import BaseLoading from '@/components/BaseLoading.vue'

  const loadingStore = useLoadingStore()
  const oauthStore = useOauthStore()

  const isLoading = computed(() => loadingStore.isLoading)
  
  oauthStore.getToken()
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
