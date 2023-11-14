<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'
import QuoteComponent from './QuoteComponent.vue'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchTestamonials($axios)

const testimonials = computed(() => wordpress.testimonials)
</script>

<template>
    <section id="testamonials">
        <h2>Client Testimonials: Hear What They Say</h2>

        <QuoteComponent
            v-for="testamonial in testimonials"
            :key="testamonial.id"
            :quote="testamonial.acf.quote"
            :attr="testamonial.acf.attribution"
        />
    </section>
</template>
