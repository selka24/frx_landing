<script setup lang="ts">
import HeroSection from "~/components/HeroSection.vue";
import MarketTypes from "~/components/MarketTypes.vue";
</script>

<template>
    <div class="flex flex-col items-center">
        <HeroSection/>
        <MarketTypes/>
        <AccountTypes/>
        <FeaturesBenefits/>
        <TestimonialSection/>
        <ContactSection class="mt-28"/>
    </div>
</template>

<style scoped>

</style>