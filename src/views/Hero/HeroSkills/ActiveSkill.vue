<template>
  <div class='d-flex align-items-center mb-3'>
    <div class='mr-2'>
      <!-- Slot (identificador de skill) -->
      <span class='slot' :class='slotClass'/>
      <!-- La imagen · Skill URL -->
      <img :src='skillUrl' :alt='skill.name'>
    </div>

    <div>
      <!-- Nombre de la habilidad -->
      <p class='skill-name m-0' :title='skill.description'>
        {{ skill.name }}
      </p>
      <!-- Runa (si tiene) -->
      <small v-if='rune' class='rune-name text-muted' :title='rune.description'>
        {{ rune.name }}
      </small>
    </div>

  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
      skill: {
          required: true,
          type: Object
      },
      rune: {
          required: false,
          type: Object
      },
      slotNum: {
          required: true,
          type: Number || String
      }
  })

  const skillUrl = computed(() => {
      // Posibles tamaños (px)
      const sizes = [21, 42, 64]
      // API URL para imágenes
      // const baseUrl = 'http://media.blizzard.com/'
      // La nueva url tiene certificado SSL (https),
      // así que el navegador las muestra sin problemas en producción.
      const baseUrl = 'https://blzmedia-a.akamaihd.net/'
      const host = `${baseUrl}d3/icons/skills/${sizes[1]}/`
      // Ejemplo:
      // http://media.blizzard.com/d3/icons/skills/42/p6_necro_bonespikes.png
      return `${host}${props.skill.icon}.png`
  })

  // Clase CSS para los slots
  const slotClass = computed(() => {
      return `slot-${props.slotNum}`
  })
</script>