import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

import App from './App.vue'
import router from './router'

import './assets/scss/styles.scss'
import 'bootstrap';

const instance = axios.create({
	baseURL: 'http://db.skinnerconsulting.tech/wp-json/wp/v2',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' }
});

const app = createApp(App)

app.use(createPinia())

app.provide('$axios', instance);
app.use(router)
app.mount('#app')
