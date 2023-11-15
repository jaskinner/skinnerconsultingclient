<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchServices($axios)

const services = computed(() => wordpress.services)

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'services')
})
</script>

<template>
    <section id="services" v-if="page">
        <h2>{{ page.acf.heading }}</h2>
        <div v-for="service in services" :key="service.id">
            <h3>{{ service.title.rendered }}</h3>
            <span v-html="service.content.rendered"></span>
        </div>
    </section>
</template>
