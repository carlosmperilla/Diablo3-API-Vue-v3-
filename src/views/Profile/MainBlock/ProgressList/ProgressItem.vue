<template>
    <div class="d-flex flex-column" :title="actTitle">
        <div class="boss-img pt-2">
        <div class="act" :class="actClass"></div>
        </div>
        <p class="d-block text-center m-0 lead font-weight-bold">{{ fullActName }}</p>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const acts = {
        act1: 'I',
        act2: 'II',
        act3: 'III',
        act4: 'IV',
        act5: 'V'
    }

    const props = defineProps({
        act: {
            required: true,
            type: Object,
            validator: (obj) => {
                return Object.keys(obj).length === 2
            }
        }
    })


    const fullActName = computed(() => {
            return `Act ${acts[props.act.actNum]}`
        })
            
    const actClass = computed(() => {
            const status = props.act.value ? 'done' : 'pending'
            return `${props.act.actNum} ${status}`
        })

    const actTitle = computed(() => {
            return props.act.value
                ? 'Act completed! 💃'
                : 'Act uncompleted 🙈'
        })
</script>