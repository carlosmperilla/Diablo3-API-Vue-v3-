<template>
  <div class='error-page m-5'>
    <hr class='my-5'>
    <!-- Si hay error -->
    <div v-if='hasErr'>

      <!-- Si hay codigo de error -->
      <h1 class='my-5'>Error <span v-if='err.status'>{{ err.status }}</span></h1>

      <!-- Si hay parámetros de ruta -->
      <div v-if='err.routeParams'>
        <h2>Query Params:</h2>
        <ul class='list-unstyled'>
          <li v-for='(val, key) in err.routeParams' :key='key'>
            👉 {{ key.toUpperCase() }}: <span class='lead text-muted'>{{ val }}</span>
          </li>
        </ul>

        <hr class='my-5'>
      </div>

      <!-- Si hay mensaje de error -->
      <div v-if='err.message'>
        <p class='lead'> {{ err.message }}</p>
      </div>

      <!-- Si hay información de error adicional -->
      <div v-if='err.data'>
        <ul class='list-unstyled'>
          <li v-for='(val, key) in err.data' :key='key'>
            {{ key.toUpperCase() }}: <span class='lead text-muted'>{{ val }}</span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Si NO hay error -->
    <div v-else>
      <h1 class='my-5'>Error Page</h1>
      <p class='lead'>What are you doing here? 🤔</p>
    </div>

  </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { onBeforeRouteLeave } from 'vue-router'
    
    import { useErrorStore  } from '@/stores/error'
    import handlerSetApiErr from '@/reusable/setError'
  
    const errorStore = useErrorStore()
    
    const err = computed(() => errorStore.error)
    const hasErr = computed(() => Object.keys(errorStore.error).length !== 0)
    
    const setApiErr = handlerSetApiErr()

    // Este 'guardia de ruta' es invocado justo antes de cambiar de página
    // Es perfecto para limpiar el mensaje de error a través del mixin y liberar memoria
    onBeforeRouteLeave((to, from, next) => {
        setApiErr(null)
        next()
    })
</script>