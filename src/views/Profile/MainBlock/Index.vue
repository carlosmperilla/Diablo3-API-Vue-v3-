<template>
    <div class="grid-container">
        <div class="grid-item item-left">
            <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>
            <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>
            <ProgressList :acts="profileData.progression"/>
        </div>
        <div class="grid-item item-right">
            <PlayerStats :stats="statsData"/>
        </div>
    </div>
</template>

<script>
    // Importamos
    import TopHeroes from './TopHeroes/Index.vue'
    import HeroesList from './HeroesList/Index.vue'
    import ProgressList from './ProgressList/Index.vue'
    import PlayerStats from './PlayerStats/Index.vue'

    export default {
        name: 'MainBlock',
        components: {
            TopHeroes,
            HeroesList,
            ProgressList,
            PlayerStats,
        },
        props: {
            profileData: {
            type: Object,
            required: true
            }
        },
        computed: {
            // Comprobamos que hay héroes
            hasHeroes () {
                return this.profileData.heroes.length > 0
            },
            // Devolvemos los 3 primeros
            topHeroes () {
                return this.profileData.heroes.slice(0, 3)
            },
            hasHeroesList () {
                return this.profileData.heroes.length > 3
            },
            heroesList () {
                return this.profileData.heroes.slice(3, this.profileData.heroes.length)
            },
            statsData () {
                const { paragonLevel, kills, timePlayed } = this.profileData
                return { paragonLevel, kills, timePlayed }
            }
        }
    }
</script>

<style lang="stylus">
    .grid-container
        display grid
        grid-template-columns 1fr

    .grid-item
    &.item-left
        grid-column span 1

    &.item-right
        grid-column span 1

    @media (min-width: 992px)
        .grid-container
            display grid
            grid-template-columns repeat(6, 1fr)

    .grid-item
        &.item-left
            grid-column span 4

        &.item-right
            grid-column span 2

   /*
  .grid-item
        &.item-left
            grid-column span 4

        &.item-right
            grid-column span 2 */
</style>