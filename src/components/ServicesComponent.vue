<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'
import { Collapse } from 'bootstrap'

const collapseElement = ref(null)

onMounted(() => {
    if (collapseElement.value) {
        new Collapse(collapseElement.value, {
            toggle: false
        })
    }
})

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
        <h2 class="text-uppercase text-primary mb-5">{{ page.acf.heading }}</h2>
        <div class="row row-gap-3 pb-5">
            <div class="col-md-4" v-for="service in services" :key="service.id">
                <div class="card">
                    <div
                        role="button"
                        class="card-body"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#card' + service.id"
                        aria-expanded="false"
                        :aria-controls="'card' + service.id"
                    >
                        <h3 class="card-title d-flex justify-content-between mb-0 text-uppercase">
                            {{ service.acf.title }}
                            <i class="bi bi-plus-circle text-primary"></i>
                        </h3>
                        <p :id="'card' + service.id" class="card-text collapse mt-3 text-secondary">
                            {{ service.acf.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
		<hr>
    </section>
</template>

<style scoped>
.card {
    cursor: pointer;
}
</style>
