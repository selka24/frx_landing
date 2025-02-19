<script setup>
import {menu} from "~/core/config.js";
</script>

<template>
    <div class="flex h-16 lg:h-24 justify-between items-center max-w-screen-xl w-full font-manrope">
        <h3 class="text-primary">ACTIVE TRADES</h3>
        <div class="hidden lg:flex gap-3.5 font-semibold">
            <a v-for="item in menu" :href="`#${item.key}`" :key="item.title" class="text-ui_white text-sm hover:text-primary">
                {{$t(`home.${item.key}`)}}
            </a>
        </div>
        <div class="flex gap-5 justify-center">
            <LangSwitch/>
            <DropdownMenu class="flex items-center lg:hidden"/>
            <button class="hidden lg:block btn btn-primary">
                {{$t('getStarted')}}
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>