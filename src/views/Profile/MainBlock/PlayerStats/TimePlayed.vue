<template>
    <div class="time-played mt-3">
        <hr class="bg-white mt-5">
        <h2 class="font-diablo my-4">Time Played</h2>
        <div class="bg-dark p-3">
            <div v-for="hero in timePlayed" :key="hero.classSlug">
                <TimePlayedHero :hero-time="hero"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TimePlayedHero from './TimePlayedHero.vue'

    const props = defineProps({
        timePlayed: {
            required: true,
            type: Array
        }
    })
</script>