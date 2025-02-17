
<script setup>
import {heroTags} from "~/core/config.js";
</script>

<template>
    <div class="flex flex-col w-full mt-24">
        <div class="grid grid-cols-2 gap-10">
            <div class="col-span-1 flex flex-col justify-center gap-10">
                <h1>
                    Trade Like a Pro: The Best <span class="text-primary">Forex Trading</span> Conditions
                </h1>
                <div class="flex gap-2">
                    <div class="tag" v-for="tag in heroTags" :key="tag">
                        {{tag}}
                    </div>
                </div>
                <div class="text-big text-ui_gray">
                    Join Thousands of Successful Traders Today and Take Your Forex Trading to the Next Level!
                </div>
            </div>
            <div class="col-span-1">
                <img src="~/assets/images/phones.png" alt="style element" class="w-full">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>