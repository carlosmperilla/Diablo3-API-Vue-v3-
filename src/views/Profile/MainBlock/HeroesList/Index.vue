<template>
    <h1>Heroes List</h1>
    <div class="heroes-list border-top border-secondary mt-5 pt-5">
        <b-table
        hover
        striped
        dark
        :items="heroes"
        :fields="fields"
        stacked="sm"
        small
        >
            <!-- Contenido -->
            <template v-slot:cell(name)="data">
                <HeroIco :hero="data.item"/>
            </template>

            <template v-slot:cell(class)="data">
                <HeroClassLevel :hero="{ class: data.item.class, level: data.item.level}"/>
            </template>
            
            <template v-slot:cell(kills)="data">
                <span>{{ $filters.formatNumber(data.item.kills.elites) }}</span>
            </template>
        </b-table>
    </div>
</template>

<script>
    import HeroIco from './HeroIco.vue'
    import HeroClassLevel from './HeroClassLevel.vue'

    export default {
        name: 'HeroesList',
        components: {
            HeroIco,
            HeroClassLevel,
        },
        props: {
            heroes: {
                required: true,
                type: Array
            }
        },
        data () {
            return {
                fields: [
                    {
                        key: 'name',
                        label: 'Name',
                    },
                    {
                        key: 'class',
                        label: 'Class',
                        sortable: true
                    },
                    {
                        key: 'kills',
                        label: 'Elite Kills',
                        sortable: true
                    }
                ]
            }
        },
    }
</script>