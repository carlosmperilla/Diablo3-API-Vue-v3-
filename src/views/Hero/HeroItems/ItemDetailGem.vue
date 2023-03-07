<template>
  <img :src='gemUrl' :alt='gem.item.name' :title='gem.item.name'>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        gem: {
            required: true,
            type: Object
        }
    })

    const gemUrl = computed(() => {
        // Cambio de 'large' por 'small'
        // const baseUrl = 'http://media.blizzard.com/'
        // La nueva url tiene certificado SSL (https),
        // así que el navegador las muestra sin problemas en producción.
        const baseUrl = 'https://blzmedia-a.akamaihd.net/'
        const host = `${baseUrl}d3/icons/items/small/`
        return `${host}${props.gem.item.icon}.png`
    })
</script>