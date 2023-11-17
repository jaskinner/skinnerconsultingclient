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
    <header id="hero" class="text-light bg-primary mb-5" v-if="page">
        <div id="hero-top" class="container py-5 pb-md-0">
            <div class="row">
                <div id="hero-top" class="col-md-6 d-flex flex-column">
                    <h1 class="fw-bold lh-base"><TimedGreeting />{{ page.acf.heading }}</h1>
                    <p class="lh-lg">{{ page.acf.body }}</p>
                    <div>
                        <a
                            href="https://www.upwork.com/freelancers/skinnerconsulting"
                            class="btn btn-light mt-3 me-3 text-uppercase text-primary"
                        >
                            Hire me on Upwork
                            <i class="bi bi-arrow-right-short ps-2"></i>
                        </a>
                        <a
                            href="https://calendly.com/skinnerconsulting/website-consultation"
                            class="btn mt-3 text-uppercase text-uppercase text-light border border-2"
                        >
                            Schedule a consultation <i class="bi bi-arrow-right-short ps-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="hero-bottom">
            <svg
                id="uuid-aeb635ff-853a-4621-b2c3-c1bc73a01ea1"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1084.88 251.13"
            >
                <g id="uuid-669e899a-795c-4dd5-a556-a5fed5f9c24f" data-name="Layer 1">
                    <polygon
                        class="uuid-925bbf27-dd12-49c9-989c-2ce4f4f50c28"
                        points="4.38 250.63 1084.38 250.63 1084.38 .63 4.38 250.63"
                    />
                </g>
            </svg>
        </div>
    </header>
</template>

<style>
.uuid-925bbf27-dd12-49c9-989c-2ce4f4f50c28 {
    fill: #fff;
    stroke: #fff;
    stroke-miterlimit: 10;
}

</style>
