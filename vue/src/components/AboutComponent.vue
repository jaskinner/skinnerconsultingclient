<script setup>
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'about')
})
</script>

<template>
    <section id="about" class="container py-5" v-if="page">
        <h2 class="text-uppercase text-primary mb-5">{{ page.acf.heading }}</h2>
        <div class="d-flex flex-row flex-wrap flex-md-nowrap flex-md-row-reverse gap-5">
            <p>{{ page.acf.body }}</p>
            <img
                width="317"
                height="317"
                src="../assets/images/portrait.webp"
                class="img-fluid mb-3 mx-auto"
                alt=""
            />
        </div>
        <div>
            <div
                class="progress my-3 text-uppercase"
                role="progressbar"
                aria-label="Web Development"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div class="progress-bar bg-primary" style="width: 90%">Web Development</div>
            </div>
            <div
                class="progress my-3 text-uppercase"
                role="progressbar"
                aria-label="Site Optimization"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div class="progress-bar bg-primary" style="width: 60%">Site Optimization</div>
            </div>
            <div
                class="progress my-3 text-uppercase"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div class="progress-bar bg-primary" style="width: 45%">SEO</div>
            </div>
            <div
                class="progress my-3 text-uppercase"
                role="progressbar"
                aria-label="Web Design"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div class="progress-bar bg-primary" style="width: 40%">Web Design</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.progress {
    height: 25px;
}
</style>
