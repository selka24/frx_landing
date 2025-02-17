<script setup>
import {marketTypes} from "~/core/config.js";
</script>

<template>
    <div class="flex flex-col py-14 gap-10">
        <div class="flex flex-col gap-6 justify-center items-center">
            <div class="tag max-w-max">Account Types</div>
            <h2>Choose Your Perfect Account Type</h2>
            <div class="text-big text-ui_gray">
                Select the account that aligns with your unique trading needs and goals
            </div>
        </div>
        <div class="grid grid-cols-4 gap-5">
            <MarketTypeCard
                v-for="marketType in marketTypes"
                class="col-span-full sm:col-span-2 lg:col-span-1"
                :key="marketType.icon"
                :card="marketType"
            />
        </div>
    </div>
</template>

<style scoped>

</style>