<template>
    <div class="hero-name-level">
        <span> {{ classToName(hero.class) }} </span>
        <span>·</span>
        <span class="text-monospace font-weight-bold"> {{ hero.level }} </span>
    </div>
</template>

<script setup>
  // Reemplazamos el mixin
  import classToName from '@/reusable/heroName.js'

  const props = defineProps({
      hero: {
        required: true,
        type: Object
      }
    })
</script>