<script setup>
defineProps(['account']);
</script>

<template>
    <div
        :class="[{'popular': account.popular}]"
        class="bg-ui_light_base/70 py-8 px-6 flex flex-col gap-3 sm:gap-6 rounded-4 sm:rounded-[18px]">
        <div class="flex flex-col gap-3.5">
            <div class="flex justify-between items-center">
                <h3>{{ account.type }}</h3>
                <div v-if="account.popular" class="tag">Popular</div>
            </div>
            <h3 class="text-ui_gray">
                <span class="text-primary">
                    ${{account.deposit}}
                </span>
                min deposit
            </h3>
        </div>
        <div class="flex flex-col gap-2.5 text-middle">
            <div
                v-for="feat in account.features"
                :key="account.title + feat"
                class="flex items-center gap-2.5">
                <nuxt-icon name="check" class="text-xs" filled/>
                <div>{{feat}}</div>
            </div>
        </div>
        <button class="btn btn-outline mt-auto font-manrope">Open Account</button>
    </div>
</template>

<style scoped>
.popular {
    box-shadow: 0px 2px 19.3px 0px #16F5FD99;
}

.popular .btn-outline {
    @apply text-primary border-primary;
}
</style>