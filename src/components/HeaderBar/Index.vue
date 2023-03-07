<template>
    <div class="header-bar">
        <div class="navigation-bar">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand :to="{ name: 'Home' }">
                    <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
                    <!-- <span class="font-diablo ml-2">D3f</span> -->
                    <span class="font-diablo ml-2">{{ title }}</span>
                </b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // 🔥 Note that only variables that start with VUE_APP_ will be statically embedded
    // into the client bundle with webpack.DefinePlugin.
    // Recuperamos la variable de entorno y la guardamos en 'title'
    // title: process.env.VUE_APP_TITLE
    const title =  ref(import.meta.env.VITE_TITLE)
</script>