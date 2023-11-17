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
		async fetchData($axios, dataset) {
			try {
				const { data } = await $axios.get('/' + dataset);

				this[dataset] = data
			} catch (error) {
				console.log(error)
			}
		},
	}
})
