<script setup>

import {accountTypes} from "~/core/config";
</script>

<template>
    <div class="flex flex-col py-14 gap-10 w-full">
        <div class="flex flex-col gap-6 justify-center items-center text-center">
            <div class="tag max-w-max">
                {{$t('home.accountTypes')}}
            </div>
            <h2>
                {{$t('home.chooseAccount')}}
            </h2>
            <div class="text-big text-ui_gray">
                {{$t('home.accountDescription')}}
            </div>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <AccountTypeCard
                v-for="account in accountTypes"
                :key="account.type"
                :account="account"
                class="col-span-full lg:col-span-1"
            />
        </div>
    </div>
</template>

<style scoped>

</style>