<script setup>
import {menu} from "~/core/config.js";

const menuActive = ref(false);

const handleHeaderToggle = () => {
    menuActive.value = !menuActive.value;
}
</script>

<template>
    <div>
        <div
            :class="[{'is-active !p-6': menuActive}]"
            class="flex dropdown font-sans font-extrabold flex-col absolute left-0 top-16 w-full bg-ui_light_base items-center text-center gap-6 p-0">
            <div v-for="item in menu" :key="'mobile' + item.title" class="text-ui_white">
                {{item.title}}
            </div>
            <button class="btn btn-primary">Get Started</button>
        </div>
        <button class="hamburger hamburger--squeeze" :class="[{'is-active': menuActive}]" @click="handleHeaderToggle" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>

<style scoped>
.dropdown{
    height: 0;
    transition: all .2s ease-in-out;
    overflow: hidden;
}

.dropdown.is-active{
    height: 377px;
}
</style>