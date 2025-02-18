<script setup>
defineProps(['account']);
</script>

<template>
    <div
        :class="[{'popular': account.popular}]"
        class="bg-ui_light_base/70 py-8 px-6 flex flex-col gap-3 sm:gap-6 rounded-2xl sm:rounded-[18px]">
        <div class="flex flex-col gap-3.5">
            <div class="flex justify-between items-center">
                <h3>{{ $t(`home.${account.type}`) }}</h3>
                <div v-if="account.popular" class="tag tag-sm">{{ $t('home.popular') }}</div>
            </div>
            <h3 class="text-ui_gray">
                <span class="text-primary">
                    ${{account.deposit}}
                </span>
                {{ $t('home.minDeposit') }}
            </h3>
        </div>
        <div class="flex flex-col gap-2.5 text-middle">
            <div
                v-for="feat in account.features"
                :key="account.type + feat"
                class="flex items-center gap-2.5">
                <nuxt-icon name="check" class="text-xs" filled/>
                <div>{{$t(`home.accountFeatures.${feat}`)}}</div>
            </div>
        </div>
        <button class="btn btn-outline mt-auto font-manrope">
            {{ $t('home.openAccount') }}
        </button>
    </div>
</template>

<style scoped>
.popular {
    box-shadow: 0 2px 19.3px 0 #16F5FD99;
}

.popular .btn-outline {
    @apply text-primary border-primary;
}
</style>