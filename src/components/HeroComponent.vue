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
    <header id="hero" class="container-fluid py-5 text-light bg-primary" v-if="page">
        <div id="hero-top" class="d-flex flex-column mx-5">
            <h1 class="fw-bold lh-base"><TimedGreeting />{{ page.acf.heading }}</h1>
            <p class="lh-lg">{{ page.acf.body }}</p>
            <div>
                <button class="btn btn-light mt-3 text-uppercase text-primary">
                    Get a free quote
                    <i class="bi bi-arrow-right-short"></i>
                </button>
                <button class="btn mt-3 text-uppercase text-uppercase text-light border border-2">
                    My Portfolio <i class="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </div>
        <div id="hero-bottom">
            <img src="../assets/images" alt="" />
        </div>
    </header>
</template>
