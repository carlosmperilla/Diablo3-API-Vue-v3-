<template>
    <footer class="footer-bar mt-5">
        <PoweredByFoot :icons="icons"/>

        <hr class="my-5">

        <div class="row">
            <div class="col-sm-6 mb-sm-0 mb-5">
                <FootLinks/>
            </div>
            <div class="col-sm-6">
                <MadeByFoot/>
            </div>
        </div>

    </footer>
</template>

<script setup>
    import { reactive } from 'vue';

    import MadeByFoot from './MadeByFoot.vue'
    import PoweredByFoot from './PoweredByFoot.vue'
    import FootLinks from './FootLinks.vue'
    
    const icons = reactive([
        {
            classes: [ 'fab', 'vuejs' ],
            color: '#4fc08d',
            href: 'https://vue.js.org/'
        },
        {
            classes: [ 'fab', 'bootstrap' ],
            color: '#7952b3',
            href: 'https://bootstrap-vue.js.org/'
        },
        {
            classes: [ 'fab', 'battle-net' ],
            href: 'https://develop.battle.net/documentation/diablo-3/community-apis'
        },
        {
            classes: [ 'fab', 'github' ],
            color: '#e4e4e4',
            href: 'https://github.com/carlosmperilla'
        },
        {
            classes: [ 'fab', 'font-awesome' ],
            color: '#0e95ff',
            href: 'https://fontawesome.com/'
        }
    ])
</script>


