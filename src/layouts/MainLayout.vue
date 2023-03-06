<template>
    <div class="container">
        <HeaderBar/>

        <router-view/>

        <FooterBar/>
    </div>
</template>

<script>
    import HeaderBar from '@/components/HeaderBar/Index.vue'
    import FooterBar from '@/components/FooterBar/Index.vue'

    export default {
        name: 'MainLayout',
        components: {
            HeaderBar,
            FooterBar,
        }
    }
</script>