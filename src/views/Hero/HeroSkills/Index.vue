<template>
  <div class='skills-wrapper mt-5'>
    <h2 class='font-diablo'>Skills</h2>
    <hr class='bg-white'>

    <b-nav pills small>
      <b-nav-item :active='!isPassiveSkillsActive' @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active='isPassiveSkillsActive' @click="changeComponent('PassiveSkills')">Passive</b-nav-item>
    </b-nav>

    <!-- Componente dínamico -->
    <!-- keep-alive evita que se vuelvan a descargar las imagenes o el estado se reinicialice,
    por cada cambio 
        https://vuejs.org/guide/built-ins/keep-alive.html#basic-usage
    -->
    <keep-alive> 
        <component :is='components[activeComponent]' :skills='componentProps'/>
    </keep-alive>

    
    <!-- <ActiveSkills :skills='skills.active'/> -->
    <!-- <hr> -->
    <!-- <PassiveSkills :skills='skills.passive'/> -->
   

  </div>
</template>

<script setup>
    import { defineAsyncComponent, computed, ref } from 'vue'

    const ActiveSkills = defineAsyncComponent(() => 
        import(/* webpackChunkName: 'ActiveSkills' */'./ActiveSkills.vue')
    )

    const PassiveSkills = defineAsyncComponent(() => 
        import(/* webpackChunkName: 'PasiveSkills' */'./PassiveSkills.vue')
    )

    const components = {
        ActiveSkills,
        PassiveSkills
    }

    const props = defineProps({
        skills: {
            required: true,
            type: Object
        }
    })

    const activeComponent = ref('ActiveSkills')

    /**
    * Dinamyc props for async dynamic components
    * @returns {String}
    */
    // Con esto estamos generando 'props' dinámicas
    // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
    const componentProps = computed(() => {
        return activeComponent.value === 'ActiveSkills' ? 
                props.skills.active :
                props.skills.passive
    })

    // Nos dice si el componente 'HabilidadesPasivas' está activo o no
    const isPassiveSkillsActive = computed(() => {
        return activeComponent.value === 'PassiveSkills'
    })

    function changeComponent (component) {
        activeComponent.value = component
    }
</script>