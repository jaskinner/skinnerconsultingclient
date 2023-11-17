<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchData($axios, 'projects')

const projects = computed(() => wordpress.projects)

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'project')
})

const media = computed(() => wordpress.media)

function getMediaItem(id) {
    const item = media.value.find((mediaItem) => mediaItem.id === id)
    return item ? item.media_details.file : null
}
</script>

<template>
    <section id="projects" class="container pt-5 pb-md-5" v-if="page">
        <h2 class="text-uppercase text-primary mb-5">{{ page.acf.heading }}</h2>

        <div class="row mb-5" :class="{ 'flex-md-row-reverse': index % 2 !== 0 }" v-for="(project, index) in projects"
            :key="project.id">
            <div class="col-md-6 mt-3 text-center" v-if="media">
                <img v-if="getMediaItem(project.acf.mockup_image)" :src="
                    'https://nyc3.digitaloceanspaces.com/app.skinnerconsulting.tech/wp-content/uploads/' +
                    getMediaItem(project.acf.mockup_image)
                " alt="Desktop and mobile view" class="img-fluid" width="888" height="482" />
                <div v-else>No image available</div>
            </div>
            <div class="col-md-6 mt-3 text-center d-flex flex-column justify-content-center align-items-center">
                <div class="row d-flex justify-content-center">
                    <div class="col-6">
                        <img v-if="getMediaItem(project.acf.brand)" :src="
                            'https://nyc3.digitaloceanspaces.com/app.skinnerconsulting.tech/wp-content/uploads/' +
                            getMediaItem(project.acf.brand)
                        " class="img-fluid pb-3" alt="Logo for company" width="400" height="400" />
                        <a class="btn mt-3 text-uppercase text-uppercase text-primary border-primary border border-2"
                            target="_blank" rel="noopener noreferrer" :href="project.acf.project_link">Visit<span
                                class="sr-only visually-hidden">(opens in new tab)</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
