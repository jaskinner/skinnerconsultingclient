<script setup>
import { computed, inject } from 'vue'
import Navbar from './components/NavbarComponent.vue'
import TimedGreeting from './components/TimedGreeting.vue'
import { useWordpressStore } from '@/stores/wordpress'

const $axios = inject('$axios')
const wordpress = useWordpressStore()

wordpress.fetchProjects($axios)
wordpress.fetchTestamonials($axios)
wordpress.fetchServices($axios)

const projects = computed(() => wordpress.projects)
const testimonials = computed(() => wordpress.testimonials)
</script>

<template>
    <Navbar />
    <main>
        <section id="hero">
            <h1><TimedGreeting />I'm Jonathan, a Wordpress and Javascript Developer.</h1>
            <span
                >I create beautiful and highly functional web development solutions to take your web
                presence to the next level.</span
            >
        </section>

        <section id="greeting">
            <h2>
                Empowering Your Online Journey with Expert Knowledge and Client-Centric Guidance
            </h2>
            <figure>
                <blockquote class="blockquote">
                    <p>
                        Whatever cannot be said clearly is probably not being thought clearly
                        either.
                    </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Peter Singer in
                    <cite title="Ethics in the Real World">Ethics in the Real World</cite>
                </figcaption>
            </figure>
            <p>
                Bringing a wealth of knowledge in web development and WordPress to the table, I am
                dedicated to demystifying the digital world for my clients. My approach is rooted in
                the belief that clear understanding fuels better outcomes. By partnering with you, I
                aim to navigate the complexities of web technology together, ensuring that every
                solution I provide is not only high-performing and SEO-friendly but also perfectly
                aligned with your needs. It’s about creating scalable digital experiences that
                resonate with your audience, powered by informed decisions every step of the way.
            </p>
        </section>

        <section id="services">
            <h2>Professional Web Development & Technical SEO Services</h2>
            <div>
                <h3>Vue.js Development</h3>
                <span
                    >Specializing in Vue.js, I create dynamic, responsive web applications that
                    offer seamless user experiences. Leveraging Vue's reactive components, I ensure
                    fast, scalable, and maintainable front-end solutions.</span
                >

                <h3>WordPress Development</h3>
                <span
                    >Offering over 15 years of WordPress expertise, I deliver custom themes,
                    plugins, and complete website solutions. My services are tailored to enhance
                    website functionality and user engagement.</span
                >

                <h3>Node.js Application Development</h3>
                <span
                    >Utilizing Node.js, I build scalable and efficient back-end solutions for web
                    applications. My approach integrates best practices in server-side scripting to
                    power real-time, data-intensive applications.</span
                >

                <h3>PHP Frameworks</h3>
                <span
                    >Expert in PHP frameworks, I develop robust web applications using Laravel,
                    CodeIgniter, and others. My focus is on crafting secure, high-performance
                    solutions that align with business objectives.</span
                >

                <h3>Technical SEO Consultation</h3>
                <span
                    >With a keen understanding of technical SEO, I offer consultation services to
                    optimize websites for search engines. My strategies encompass site speed
                    optimization, mobile-friendliness, and structured data implementation.</span
                >

                <h3>API Development and Integration</h3>
                <span
                    >Specialized in creating and integrating APIs, I ensure seamless communication
                    between different software components and third-party services, enhancing
                    application functionality and user experience.</span
                >

                <h3>Web Performance Optimization</h3>
                <span
                    >Focus on enhancing website speed and performance, crucial for both user
                    experience and SEO. This includes code optimization, asset minification, and
                    leveraging caching technologies.</span
                >
            </div>
        </section>

        <section id="portfolio">
            <h2>Showcase of My Web Development Projects</h2>

            <div v-for="project in projects" :key="project.id">
                <h3>{{ project.title.rendered }}</h3>
            </div>
        </section>

        <section>
            <h2>Client Testimonials: Hear What They Say</h2>

            <figure v-for="testimonial in testimonials" :key="testimonial.id">
                <blockquote class="blockquote">
                    <p>
                        {{ testimonial.content.rendered }}
                    </p>
                </blockquote>
                <figcaption class="blockquote-footer">{{ testimonial.title.rendered }}</figcaption>
            </figure>
        </section>

        <section>
            <h2>Seasoned Full Stack Developer with a Rich Background in Data and UI/UX</h2>
            <p>
                I began my tech journey in database management and ETL, transitioning into front-end
                development and WordPress, where I worked with companies like Sensus and Lenovo. My
                move to backend development at Financial Risk Group marked a pivotal point,
                deepening my full stack development skills. In NYC, I leveraged my performing arts
                background for effective client communication and started a successful freelancing
                career before moving into a significant role as a ServiceNow Developer at CBS
                Corporation. At ServiceTrade, I collaborated on a B2B tool suite, further honing my
                collaborative development skills. Now, as a freelancer since April 2023, I
                specialize in empowering clients across various industries with robust and
                innovative tech solutions.
            </p>
        </section>

        <section>
            <h2>Ready to Elevate Your Project? Let's Connect!</h2>
            <span
                >Have a project in mind or need expert advice? I'm here to help. Contact me and
                let's bring your ideas to life.</span
            >

            <form action="submit">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
</template>
