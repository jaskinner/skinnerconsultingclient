<script setup>
import QuoteComponent from './QuoteComponent.vue'
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'greeting')
})
</script>

<template>
    <section id="greeting" v-if="page">
        <h2>{{ page.acf.heading }}</h2>
        <QuoteComponent
            quote="Whatever cannot be said clearly is probably not being thought clearly either."
            attr="Peter Singer"
            citation="Ethics in the Real World"
        />
        <p>{{ page.acf.body }}</p>
    </section>
</template>
