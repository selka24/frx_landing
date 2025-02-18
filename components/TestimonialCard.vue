<script setup lang="ts">
defineProps(['testimonial'])
</script>

<template>
    <div
        class="bg-ui_light_base/70 py-8 px-6 flex flex-col gap-5 lg:gap-[30px] rounded-[16px] sm:rounded-[18px]"
    >
        <img src="~/assets/images/stars.png" class="max-w-[130px] lg:max-w-[154px]" alt="stars">
        <div class="text-middle">
            {{ testimonial.description }}
        </div>
        <div class="flex gap-5 items-center">
            <img :src="`/clients/${testimonial.client.image}`" class="avatar" :alt="testimonial.client.name" />
            <div class="flex flex-col gap-2.5">
                <h3>{{testimonial.client.name}}</h3>
                <div class="text-middle text-ui_gray">@{{testimonial.client.username}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar {
    @apply w-[86px] h-[86px] rounded-[7px];
}
</style>