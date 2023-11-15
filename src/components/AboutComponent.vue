<script setup>
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find(page => page.slug === 'about')
})
</script>

<template>
    <section id="about" v-if="page">
        <h2>{{ page.acf.heading }}</h2>
        <p>{{ page.acf.body }}</p>
    </section>
</template>
