<script setup>
defineProps(['card'])
</script>

<template>
    <div class="bg-ui_light_base/70 py-8 px-6 flex flex-col gap-3 sm:gap-6 rounded-2xl sm:rounded-[18px]">
        <nuxt-icon
            :name="card.icon"
            filled
            class="text-3xl sm:text-[41px]"
        />
        <div class="flex flex-col gap-1.5 sm:gap-2.5">
            <h3>{{$t(`home.marketsFeatures.${card.langKey}.title`)}}</h3>
            <div class="text-middle">{{$t(`home.marketsFeatures.${card.langKey}.description`)}}</div>
        </div>
        <div class="flex flex-col gap-1.5 sm:gap-2.5">
            <div class="flex text-xs lg:text-base" v-for="value in card.values" :key="card.icon + value.pair">
                <div>{{value.pair}}</div>
                <div class="ml-auto text-primary font-manrope font-extrabold">{{value.price}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>