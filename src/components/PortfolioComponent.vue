<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchProjects($axios)

const projects = computed(() => wordpress.projects)

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'portfolio')
})
</script>

<template>
    <section id="portfolio" class="container" v-if="page">
        <h2>{{ page.acf.heading }}</h2>

        <div
            class="row mb-3"
            :class="{ 'flex-row-reverse': index % 2 !== 0 }"
            v-for="(project, index) in projects"
            :key="project.id"
        >
            <div
                class="col-md-6 text-center d-flex flex-column justify-content-around align-items-center"
            >
                <h3 v-html="project.title.rendered"></h3>
                <a class="btn btn-primary flex-shrink-1" :href="project.acf.project_link">Visit</a>
            </div>
            <div class="col-md-6">image</div>
        </div>
    </section>
</template>
