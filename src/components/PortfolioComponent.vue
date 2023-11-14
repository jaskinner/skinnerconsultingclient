<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchProjects($axios)

const projects = computed(() => wordpress.projects)
</script>

<template>
    <section id="portfolio">
        <h2>Showcase of My Web Development Projects</h2>

        <div v-for="project in projects" :key="project.id">
            <h3 v-html="project.title.rendered"></h3>
            <a :href="project.acf.project_link">Visit</a>
        </div>
    </section>
</template>
