<template>
    <div class="container">
        <HeaderBar/>

        <router-view/>

        <FooterBar/>
    </div>
</template>

<script setup>
    import HeaderBar from '@/components/HeaderBar/Index.vue'
    import FooterBar from '@/components/FooterBar/Index.vue'
</script>