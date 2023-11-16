import { defineStore } from 'pinia'

export const useWordpressStore = defineStore('wordpress', {
	state: () => ({
		projects: [],
		testimonials: [],
		services: [],
		pages: [],
		media: [],
		isLoading: false,
		error: null
	}),
	actions: {
		async fetchProjects($axios) {
			try {
				const { data } = await $axios.get('/portfolio');

				this.projects = data;
			} catch (error) {
				console.log(error)
			}
		},
		async fetchTestimonials($axios) {
			try {
				const { data } = await $axios.get('/testimonial');

				this.testimonials = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchServices($axios) {
			try {
				const { data } = await $axios.get('/service');

				this.services = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchPages($axios) {
			try {
				const { data } = await $axios.get('/pages');

				this.pages = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchMedia($axios) {
			try {
				const { data } = await $axios.get('/media');

				this.media = data
			} catch (error) {
				console.log(error)
			}
		},
	}
})
