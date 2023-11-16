<script setup>
const props = defineProps({
    quote: String,
    attr: String,
    citation: String
})
</script>

<template>
    <figure>
        <blockquote class="blockquote">
            <p class="fs-6 fst-italic">{{ props.quote }}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            {{ props.attr }} <span v-if="props.citation">in </span>
            <cite v-if="props.citation" :title="props.citation">{{ props.citation }}</cite>
        </figcaption>
    </figure>
</template>
