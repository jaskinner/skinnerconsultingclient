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
    <section id="contact" class="container-fluid py-5" v-if="page">
        <div class="row mx-5">
            <div class="col-md-6">
                <h2 class="text-uppercase text-primary mb-3">{{ page.acf.heading }}</h2>
                <p>{{ page.acf.body }}</p>
            </div>
            <div class="col-md-6">
                <form action="submit">
                    <div class="mb-3">
                        <input class="form-control" type="text" name="name" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="email" name="email" placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <textarea
                            class="form-control"
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Send</button>
                </form>
            </div>
        </div>
    </section>
</template>
