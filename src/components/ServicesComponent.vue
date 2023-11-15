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
    <section id="services" class="container" v-if="page">
        <h2>{{ page.acf.heading }}</h2>
        <div class="row row-gap-3">
            <div class="col-md-4" v-for="service in services" :key="service.id">
                <div class="card">
                    <div class="card-img-top text-center px-5 py-3" v-html="service.acf.icon"></div>
                    <div class="card-body">
                        <h3 class="card-title">{{ service.acf.title }}</h3>
                        <p class="card-text">{{ service.acf.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
