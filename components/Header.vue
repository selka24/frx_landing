<script setup>
import {menu} from "~/core/config.js";
</script>

<template>
    <div class="flex h-24 justify-between items-center max-w-screen-xl w-full font-manrope">
        <h3 class="text-primary">LOGO</h3>
        <div class="flex gap-10">
            <div v-for="item in menu" :key="item.title" class="text-ui_white">
                {{item.title}}
            </div>
        </div>
        <button class="btn btn-primary">Get Started</button>
    </div>
</template>

<style scoped>

</style>