<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchTestamonials($axios)

const testimonials = computed(() => wordpress.testimonials)
</script>

<template>
    <section id="testamonials">
        <h2>Client Testimonials: Hear What They Say</h2>

        <figure v-for="testimonial in testimonials" :key="testimonial.id">
            <blockquote class="blockquote" v-html="testimonial.content.rendered"></blockquote>
            <figcaption class="blockquote-footer">{{ testimonial.title.rendered }}</figcaption>
        </figure>
    </section>
</template>
