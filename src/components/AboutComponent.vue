<script setup>
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'about')
})
</script>

<template>
    <section id="about" class="container py-5" v-if="page">
        <div class="mx-5">
            <h2 class="text-uppercase text-primary mb-3">{{ page.acf.heading }}</h2>
            <p>{{ page.acf.body }}</p>
        </div>
    </section>
</template>
