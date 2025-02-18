<script setup>
import {menu} from "~/core/config.js";
</script>

<template>
    <div class="flex h-16 lg:h-24 justify-between items-center max-w-screen-xl w-full font-manrope">
        <h3 class="text-primary">ACTIVE TRADES</h3>
        <div class="hidden lg:flex gap-10">
            <div v-for="item in menu" :key="item.title" class="text-ui_white">
                {{item.title}}
            </div>
        </div>
        <button class="hidden lg:block btn btn-primary">Get Started</button>
        <DropdownMenu class="flex lg:hidden"/>
    </div>
</template>

<style scoped>

</style>