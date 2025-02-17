<script setup>

import {accountTypes} from "~/core/config";
</script>

<template>
    <div class="flex flex-col py-14 gap-10">
        <div class="flex flex-col gap-6 justify-center items-center">
            <div class="tag max-w-max">Market Types</div>
            <h2>Trade Global Markets with Ease</h2>
            <div class="text-big text-ui_gray">Take Advantage of a Wide Range of Trading Instruments and Benefit from Highly Competitive Spreads</div>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <AccountTypeCard
                v-for="account in accountTypes"
                :key="account.type"
                :account="account"
            />
        </div>
    </div>
</template>

<style scoped>

</style>