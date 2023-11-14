<script setup>
import { computed, inject } from 'vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchServices($axios)

const services = computed(() => wordpress.services)
</script>

<template>
    <section id="services">
        <h2>{{  }}</h2>
        <div v-for="service in services" :key="service.id">
            <h3>{{ service.title.rendered }}</h3>
            <span v-html="service.content.rendered"></span>
        </div>
    </section>
</template>
