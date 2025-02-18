<script setup>
import {features} from "~/core/config.js";
</script>

<template>
    <div class="flex flex-col py-14 gap-10">
        <div class="flex flex-col gap-6 justify-center items-center text-center">
            <div class="tag max-w-max">Features & Benefits</div>
            <h2>Unlock Your Trading Potential</h2>
            <div class="text-big text-ui_gray">
                Explore the powerful tools and services designed to help you achieve financial success
            </div>
        </div>
        <div class="grid grid-cols-4 gap-10">
            <div
                v-for="feature in features"
                :key="feature.icon"
                class="flex flex-col gap-7 items-center col-span-2 lg:col-span-1">
                <nuxt-icon :name="feature.icon" class="text-[46px]" filled/>
                <div class="flex flex-col text-center">
                    <h3>{{feature.title}}</h3>
                    <br>
                    <div class="text-middle text-ui_gray">
                        {{feature.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>