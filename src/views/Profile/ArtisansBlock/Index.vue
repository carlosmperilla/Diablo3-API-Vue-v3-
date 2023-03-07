<template>
    <div class="artisan-list">
        <hr class="bg-light my-5">
        <h3 class="font-diablo mb-4">Artisans</h3>
        <b-row>
            <b-col lg="4" v-for="artisan in artisansInfo" :key="artisan.name">
                <ArtisanItem :artisan="artisan"/>
            </b-col>
        </b-row>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    import ArtisanItem from './ArtisanItem.vue'

    const props = defineProps({
        artisansData: {
                type: Object,
                required: true
        }
    })

    const artisansInfo = computed( () => {
                return [
                    {
                        name: 'blacksmith',
                        icon: 'hammer',
                        emoji: '⚒',
                        color: '#ffb74d',
                        normal: props.artisansData.blacksmith,
                        hardcore: props.artisansData.blacksmithHardcore
                    },
                    {
                        name: 'jeweler',
                        icon: 'gem',
                        emoji: '💎',
                        color: '#4dd0e1',
                        normal: props.artisansData.jeweler,
                        hardcore: props.artisansData.jewelerHardcore
                    },
                    {
                        name: 'mystic',
                        icon: 'hat-wizard',
                        emoji: '🔮',
                        color: '#ba68c8',
                        normal: props.artisansData.mystic,
                        hardcore: props.artisansData.mysticHardcore
                    }
                ]
            })
</script>