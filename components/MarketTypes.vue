<script setup>
import {marketTypes} from "~/core/config.js";
</script>

<template>
    <div class="flex flex-col py-14 gap-10 w-full">
        <div class="flex flex-col gap-6 justify-center items-center text-center">
            <div class="tag max-w-max">{{$t('home.marketTypes')}}</div>
            <h2>{{$t('home.tradeWithEase')}}</h2>
            <div class="text-big text-ui_gray">
                {{$t('home.marketDescription')}}
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