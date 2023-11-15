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
    <header id="hero" class="container-fluid py-5 text-light" v-if="page">
        <div class="d-flex flex-column mx-5">
            <h1 class="fw-bold lh-base"><TimedGreeting />{{ page.acf.heading }}</h1>
            <p class="lh-lg">{{ page.acf.body }}</p>
            <div>
                <button class="btn btn-light mt-3">
                    Get a free quote
                    <i class="bi bi-arrow-right-short"></i>
                </button>
                <button class="btn mt-3">My Portfolio</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
#hero {
    background-color: #0054ff;
}
</style>
