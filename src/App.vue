<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import TestimonialsComponent from './components/TestamonialsComponent.vue'
import GreetingComponent from './components/GreetingComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
</script>

<template>
    <NavbarComponent />
    <main>
        <HeroComponent />

        <GreetingComponent />

        <ServicesComponent />

        <PortfolioComponent />

        <TestimonialsComponent />

        <AboutComponent />

        <ContactComponent />
    </main>
</template>
