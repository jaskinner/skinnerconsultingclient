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
    const item = media.value.find((mediaItem) => mediaItem.id === id);
    if (!item) return null;

    const sizes = item.media_details.sizes;
    let srcset = {};
    for (let size in sizes) {
        srcset[size] = {
            url: sizes[size].source_url,
            width: sizes[size].width
        };
    }
    return {
        srcset,
        alt: item.alt_text || 'Image description',
    };
}

function getSrcsetString(id) {
    const mediaItem = getMediaItem(id);
    if (!mediaItem) return '';

    return Object.values(mediaItem.srcset)
        .map(size => `${size.url} ${size.width}w`)
        .join(', ');
}

</script>

<template>
    <section id="projects" class="container pt-5 pb-md-5" v-if="page">
        <h2 class="text-uppercase text-primary mb-5">{{ page.acf.heading }}</h2>

        <div class="row mb-5" :class="{ 'flex-md-row-reverse': index % 2 !== 0 }" v-for="(project, index) in projects"
            :key="project.id">
            <div class="col-md-6 mt-3 text-center" v-if="media">
                <template v-if="getMediaItem(project.acf.mockup_image)">
                    <img :src="getMediaItem(project.acf.mockup_image).srcset.full.url"
                        :srcset="getSrcsetString(project.acf.mockup_image)" sizes="(max-width: 888px) 100vw, 888px"
                        :alt="getMediaItem(project.acf.mockup_image).alt" class="img-fluid" width="888" height="482" />
                </template>
                <div v-else>No image available</div>
            </div>
            <div class="col-md-6 mt-3 text-center d-flex flex-column justify-content-center align-items-center">
                <div class="row d-flex justify-content-center">
                    <div class="col-6">
                        <template v-if="getMediaItem(project.acf.brand)">
                            <img :src="getMediaItem(project.acf.brand).srcset.full.url"
                                :srcset="getSrcsetString(project.acf.brand)" sizes="(max-width: 888px) 100vw, 888px"
                                :alt="getMediaItem(project.acf.brand).alt" class="img-fluid pb-3" width="888"
                                height="482" />
                        </template>
                        <a class="btn mt-3 text-uppercase text-uppercase text-primary border-primary border border-2"
                            target="_blank" rel="noopener noreferrer" :href="project.acf.project_link">Visit<span
                                class="sr-only visually-hidden">(opens in new tab)</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
