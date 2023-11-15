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
    <section id="portfolio" v-if="page">
        <h2>{{ page.acf.heading }}</h2>

        <div v-for="project in projects" :key="project.id">
            <h3 v-html="project.title.rendered"></h3>
            <a :href="project.acf.project_link">Visit</a>
        </div>
    </section>
</template>
