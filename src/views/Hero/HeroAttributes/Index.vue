<template>
  <div class='h-attriubutes'>
    <!--Título-->
    <h2 class='font-diablo'>Attributes</h2>

    <hr class='bg-white'>

    <div class='attributes'>

      <!-- Atributos Principales-->
      <div class='core'>
        <HeroAttributeList :attributes='getCoreAttributes'/>
      </div>

      <hr>

      <!-- Atributos Secundarios-->
      <div class='secondary'>
        <HeroAttributeList :attributes='getSecondaryAttributes'/>
      </div>

    </div>

    <hr>

    <!-- Recursos -->
    <div class='resources'>
      <HeroResources :resources='getResources'/>
    </div>

  </div>
</template>

<!-- <script>
    // Importamos los componentes
    import HeroAttributeList from './HeroAttributeList.vue'
    import HeroResources from './HeroResources.vue'

    // Definimos:
    // Los atributos principales
    const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
    // Los atributos secundarios
    const secondaryAttributes = ['damage', 'toughness', 'healing']
    // Los recursos
    const resources = ['life', 'primaryResource', 'secondaryResource']

    export default {
        name: 'HeroAttributes',
        components: { 
            HeroResources, 
            HeroAttributeList,
        },
        // Definimos la propiedad
        props: {
            attributes: {
                type: Object,
                required: true
            }
        },
        computed: {
            // Creamos el objeto de atributos principales
            coreAttributes () {
                return coreAttributes.map(item => ({ name: item, val: this.attributes[item] }))
            },
            // Creamos el objeto de atributos principales
            secondaryAttributes () {
                return secondaryAttributes.map(item => ({ name: item, val: this.attributes[item] }))
            },
            resources () {
                // Creamos el objeto de recursos 
                // Agregamos el tipo de personaje `classSlug` (necesario para los Sprites CSS)
                const data = {
                    classSlug: this.attributes.classSlug,
                    resources: {}
                }
                resources.forEach(item => {
                    data.resources[item] = { name: item, val: this.attributes[item] }
                })
                return data
            }
        }
    }
</script> -->

<script setup>
  import { computed } from 'vue'

  // Importamos los componentes
  import HeroAttributeList from './HeroAttributeList.vue'
  import HeroResources from './HeroResources.vue'

  // Definimos:
  // Los atributos principales
  const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
  // Los atributos secundarios
  const secondaryAttributes = ['damage', 'toughness', 'healing']
  // Los recursos
  const resources = ['life', 'primaryResource', 'secondaryResource']

  // Definimos la propiedad
  const props = defineProps({
      attributes: {
          type: Object,
          required: true
      }
  })

  // Creamos el objeto de atributos principales
  const getCoreAttributes = computed(() => {
      return coreAttributes.map(item => ({ name: item, val: props.attributes[item] }))
  })

  // Creamos el objeto de atributos principales
  const getSecondaryAttributes = computed(() => {
      return secondaryAttributes.map(item => ({ name: item, val: props.attributes[item] }))
  })

  const getResources = computed(() => {
      // Creamos el objeto de recursos 
      // Agregamos el tipo de personaje `classSlug` (necesario para los Sprites CSS)
      const data = {
          classSlug: props.attributes.classSlug,
          resources: {}
      }
      resources.forEach(item => {
          data.resources[item] = { name: item, val: props.attributes[item] }
      })
      return data
  })
</script>