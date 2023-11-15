<script setup>
import { useWordpressStore } from '@/stores/wordpress'
import { computed } from 'vue'

const wordpress = useWordpressStore()

const pages = computed(() => wordpress.pages)

const page = computed(() => {
    return pages.value.find((page) => page.slug === 'contact')
})
</script>

<template>
    <section id="contact" v-if="page">
        <h2>{{ page.acf.heading }}</h2>
        <p>{{ page.acf.body }}</p>

        <form action="submit">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
</template>
