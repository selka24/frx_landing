<script setup lang="ts">
const contactForm = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})
</script>

<template>
    <div class="max-w-screen-lg bg-ui_light_base/70 p-6 lg:py-[60px] lg:px-[82px] rounded-[18px] flex flex-col gap-[40px]">
        <div class="flex flex-col gap-6 justify-center items-center text-center">
            <div class="tag max-w-max">Contact</div>
            <h2>Ready to Start Your Trading Journey?</h2>
            <div class="text-big text-ui_gray">
                Sign up today, book a consultation, or get more information to kickstart your success in the Forex market
            </div>
        </div>
        <form class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-5 col-span-full lg:col-span-1">
                <input v-model="contactForm.name" placeholder="Name" type="text">
                <input v-model="contactForm.email" placeholder="Email Address" type="email">
                <input v-model="contactForm.phone" placeholder="Phone Number" type="text">
            </div>
            <div class="flex col-span-full lg:col-span-1">
                <textarea v-model="contactForm.message" placeholder="Message" class="w-full"></textarea>
            </div>
            <div class="col-span-full flex">
                <button class="btn btn-primary mx-auto font-manrope">Get started</button>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>