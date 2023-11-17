<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'
import QuoteComponent from './QuoteComponent.vue'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchData($axios, 'testimonials')

const testimonials = computed(() => wordpress.testimonials)

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'testimonials')
})
</script>

<template>
    <section id="testimonials" class="bg-primary py-5 text-light" v-if="page">
        <div class="container">
            <h2 class="text-uppercase mb-5">{{ page.acf.heading }}</h2>

            <div class="row">
                <div
                    class="col-12 col-md-6 col-lg-3"
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                >
                    <QuoteComponent
                        :quote="testimonial.acf.quote"
                        :attr="testimonial.acf.attribution"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
