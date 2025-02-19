<script setup lang="ts">
import HeroSection from "~/components/HeroSection.vue";
import MarketTypes from "~/components/MarketTypes.vue";
</script>

<template>
    <div class="flex flex-col items-center">
        <HeroSection id="home"/>
        <MarketTypes id="marketTypes"/>
        <AccountTypes id="accountTypes"/>
        <FeaturesBenefits id="featBenefit"/>
        <TestimonialSection id="testimonials"/>
        <ContactSection class="mt-28" id="contact"/>
    </div>
</template>

<style>
html { scroll-behavior: smooth; }
</style>