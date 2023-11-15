<script setup>
import TimedGreeting from '../components/TimedGreeting.vue'
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'hero')
})
</script>

<template>
    <section id="hero" v-if="page">
        <h1><TimedGreeting />{{ page.acf.heading }}</h1>
        <p>{{ page.acf.body }}</p>
    </section>
</template>
