<script setup lang="ts">
import {menu} from "~/core/config";

const menuLength = menu.length
const half = Math.floor( menuLength / 2)

const firstMenu = menu.slice(0, half);
const secondMenu = menu.slice(half, menuLength);

</script>

<template>
<div class="bg-ui_light_base/70 w-full flex justify-center font-manrope py-[60px]">
    <div class="max-w-screen-lg grid grid-cols-8 w-full">
        <div class="col-span-2 flex flex-col justify-center gap-5">
            <h3 class="text-primary">Active Trades</h3>
            <div class="text-middle">All rights reserved.</div>
        </div>
        <div class="col-span-2 flex flex-col gap-3.5">
            <div class="text-middle" v-for="fM in firstMenu" :key="`footer-${fM.title}`">
                {{fM.title}}
            </div>
        </div>
        <div class="col-span-2 flex flex-col gap-3.5">
            <div class="text-middle" v-for="fM in secondMenu" :key="`footer-${fM.title}`">
                {{fM.title}}
            </div>
        </div>
        <div class="col-span-2 flex justify-end items-center">
            <button class="btn btn-primary">Get started</button>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>