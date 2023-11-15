<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'
import QuoteComponent from './QuoteComponent.vue'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchTestimonials($axios)

const testimonials = computed(() => wordpress.testimonials)

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'testimonials')
})
</script>

<template>
    <section id="testimonials" class="container" v-if="page">
        <h2>{{ page.acf.heading }}</h2>

        <QuoteComponent
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :quote="testimonial.acf.quote"
            :attr="testimonial.acf.attribution"
        />
    </section>
</template>
