<template>
    <p class="text-muted m-0 pt-1 pl-3 text-left text-sm-right">
        <small>
            Made by
            <a :href="autorGitHub" target="_blank">{{ autor }}</a>
        </small>
    </p>
</template>

<script setup>
    const autor = 'Carlos Perilla'
    const autorGitHub = 'https://github.com/carlosmperilla'
</script>