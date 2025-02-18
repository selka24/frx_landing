<script setup lang="ts">
import {testimonials} from "~/core/config";
</script>

<template>

    <div class="flex flex-col py-14 gap-10 w-full">
        <div class="flex flex-col gap-6 justify-center items-center text-center">
            <div class="tag max-w-max">
                {{$t('home.testimonials')}}
            </div>
            <h2>{{$t('home.clientsSaying')}}</h2>
            <div class="text-big text-ui_gray">
                {{$t('home.realStories')}}
            </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
            <TestimonialCard
                v-for="testimonial in testimonials"
                :key="testimonial.client.username"
                :testimonial="testimonial"
                class="col-span-full lg:col-span-1"
            />
        </div>
    </div>
</template>

<style scoped>

</style>