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

const media = computed(() => wordpress.media)

function getMediaItem(id) {
    const item = media.value.find((mediaItem) => mediaItem.id === id)
    return item ? item.media_details.file : null
}
</script>

<template>
    <section id="portfolio" class="container" v-if="page">
        <h2>{{ page.acf.heading }}</h2>

        <div
            class="row mb-3 p-5"
            :class="{ 'flex-md-row-reverse': index % 2 !== 0 }"
            v-for="(project, index) in projects"
            :key="project.id"
        >
            <div class="col-md-6 p-5 text-center" v-if="media">
                <img
                    class="img-fluid"
                    :src="
                        'https://local.skinnerconsulting.tech:8890/wp-content/uploads/' +
                        getMediaItem(project.acf.brand)
                    "
                    alt=""
                />
            </div>
            <div
                class="col-md-6 p-5 text-center d-flex flex-column justify-content-center align-items-center"
            >
                <h3 v-html="project.title.rendered"></h3>
                <a
                    class="btn btn-primary flex-shrink-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="project.acf.project_link"
                    >Visit<span class="sr-only visually-hidden">(opens in new tab)</span></a
                >
            </div>
        </div>
    </section>
</template>

<style scoped>
a span {
    display: none;
}
</style>
