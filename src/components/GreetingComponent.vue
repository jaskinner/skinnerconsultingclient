<script setup>
import QuoteComponent from './QuoteComponent.vue'
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'greeting')
})
</script>

<template>
    <section id="greeting" class="container-fluid py-5" v-if="page">
        <div class="mx-5">
            <h2 class="text-uppercase text-primary mb-5">{{ page.acf.heading }}</h2>
            <p class="mx-3">
                <QuoteComponent
                    quote="Whatever cannot be said clearly is probably not being thought clearly either."
                    attr="Peter Singer"
                    citation="Ethics in the Real World"
                />
			</p>
            <p>
                <small>{{ page.acf.body }}</small>
            </p>
        </div>
    </section>
</template>
