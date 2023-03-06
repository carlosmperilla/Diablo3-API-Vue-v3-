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
        <component :is='activeComponent' :skills='componentProps'/>
    </keep-alive>

    <!--
    <ActiveSkills :skills='skills.active'/>
    <hr>
    <PassiveSkills :skills='skills.passive'/>
    -->

  </div>
</template>

<script>
    export default {
        name: 'HeroSkills',
        components: {
            // Lazy Loading
            ActiveSkills: () => import(/* webpackChunkName: 'ActiveSkills' */
                                        './ActiveSkills.vue'),
            PassiveSkills: () => import(/* webpackChunkName: 'PasiveSkills' */
                                        './PassiveSkills.vue'),
        },
        props: {
            skills: {
                required: true,
                type: Object
            }
        },
        data () {
            return {
                activeComponent: 'ActiveSkills'
            }
        },
        computed: {
            /**
            * Dinamyc props for async dynamic components
            * @returns {String}
            */
            // Con esto estamos generando 'props' dinámicas
            // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
            componentProps () {
                return this.activeComponent === 'ActiveSkills' ? 
                       this.skills.active :
                       this.skills.passive
            },
            // Nos dice si el componente 'HabilidadesPasivas' está activo o no
            isPassiveSkillsActive () {
                return this.activeComponent === 'PassiveSkills'
            }
        },
        methods: {
            changeComponent (component) {
                this.activeComponent = component
            }
        }
    }
</script>