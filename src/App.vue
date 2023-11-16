<script setup>
// import NavbarComponent from './components/NavbarComponent.vue'
import TestimonialsComponent from './components/TestimonialsComponent.vue'
import GreetingComponent from './components/GreetingComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import { useWordpressStore } from '@/stores/wordpress'
import { inject } from 'vue'

const $axios = inject('$axios')

const wordpress = useWordpressStore()

wordpress.fetchPages($axios)
</script>

<template>
    <!-- <NavbarComponent /> -->
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
