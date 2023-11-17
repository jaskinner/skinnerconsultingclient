<script setup>
import TestimonialsComponent from './components/TestimonialsComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import { useWordpressStore } from '@/stores/wordpress'
import { inject } from 'vue'

const $axios = inject('$axios')

const wordpress = useWordpressStore()

wordpress.fetchData($axios, 'pages')
wordpress.fetchData($axios, 'media')
</script>

<template>
    <main>
        <HeroComponent />

        <ServicesComponent />

        <PortfolioComponent />

        <TestimonialsComponent />

        <AboutComponent />
    </main>
</template>
