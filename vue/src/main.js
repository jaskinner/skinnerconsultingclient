import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

import App from './App.vue'

import './assets/scss/styles.scss'

const instance = axios.create({
	baseURL: 'https://db.skinnerconsulting.tech/wp-json/wp/v2',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' }
});

const app = createApp(App)

app.use(createPinia())

app.provide('$axios', instance);
app.mount('#app')
