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
    <header id="hero" class="text-light bg-primary" v-if="page">
        <div class="container-fluid py-5">
            <div class="row">
                <div id="hero-top" class="col-md-6 d-flex flex-column px-5">
                    <h1 class="fw-bold lh-base"><TimedGreeting />{{ page.acf.heading }}</h1>
                    <p class="lh-lg">{{ page.acf.body }}</p>
                    <div>
                        <button class="btn btn-light mt-3 me-3 text-uppercase text-primary">
                            Get a free quote
                            <i class="bi bi-arrow-right-short ps-2"></i>
                        </button>
                        <button
                            class="btn mt-3 text-uppercase text-uppercase text-light border border-2"
                        >
                            My Portfolio <i class="bi bi-arrow-right-short ps-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="hero-bottom">
            <img width="1920" height="444" class="img-fluid" src="../assets/images/triangle-hero.svg" alt="" />
        </div>
    </header>
</template>
