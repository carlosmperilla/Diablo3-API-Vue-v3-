<template>
    <div class="home-title text-center">
        <h1 v-diablo:bone.top.bottom class="my-5">{{ title }}</h1>
        <p class="lead text-muted">Enter your
        <em>
            <a :href="aboutBattleTag" target="_blank" title="Format: YourProfile#1234">battle-tag</a>
        </em>
        and select your region to see your profile!</p>
        <hr class="mt-5">
    </div>
</template>
  
<script setup>
    const aboutBattleTag = "https://eu.battle.net/support/es/article/75767"
    const title = 'Diablo 3 Profile Finder'
</script>