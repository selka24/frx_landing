<script setup>
import {heroTags} from "~/core/config.js";
</script>

<template>
    <div class="flex flex-col w-full mt-24">
        <div class="grid grid-cols-2 gap-10">
            <div class="col-span-full lg:col-span-1 flex flex-col justify-center gap-10">
                <h1 v-html="$t('home.heroTitle')"/>
                <div class="flex flex-wrap gap-2">
                    <div class="tag" v-for="tag in heroTags" :key="tag">
                        {{$t(`home.heroTags.${tag}`)}}
                    </div>
                </div>
                <div class="text-big text-ui_gray">
                    {{ $t('home.heroDescription')}}
                </div>
            </div>
            <div class="col-span-full lg:col-span-1">
                <nuxt-img src="/images/phones.png" alt="style element" class="w-full"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>