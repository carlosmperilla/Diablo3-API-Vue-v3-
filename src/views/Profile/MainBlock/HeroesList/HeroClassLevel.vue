<template>
    <div class="hero-name-level">
        <span> {{ classToName(hero.class) }} </span>
        <span>·</span>
        <span class="text-monospace font-weight-bold"> {{ hero.level }} </span>
    </div>
</template>

<script>
// Traemos el mixin
import heroName from '@/mixins/heroName.js'

export default {
  name: 'HeroNameLevel',
  // Lo damos de alta
  mixins: [heroName],
  props: {
    hero: {
      required: true,
      type: Object
    }
  }
}
</script>