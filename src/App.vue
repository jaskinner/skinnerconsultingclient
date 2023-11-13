<script setup>
import Navbar from './components/NavbarComponent.vue';
import TimedGreeting from './components/TimedGreeting.vue';
</script>

<template>
  <Navbar />
  <main>
    <section id="hero">
      <h1>
        <TimedGreeting />I'm Jon, a Wordpress and Javascript Developer.
      </h1>
      <span>I create beautiful and highly functional web development solutions to take your web presence to the next
        level.</span>
    </section>
    <section id="greeting">
      <h2>Empowering Your Online Journey with Expert Knowledge and Client-Centric Guidance</h2>
      <figure>
        <blockquote class="blockquote">
          <p>Whatever cannot be said clearly is probably not being thought clearly either.</p>
        </blockquote>
      </figure>
      <figcaption class="blockquote-footer">
        Peter Singer in <cite title="Ethics in the Real World">Ethics in the Real World</cite>
      </figcaption>
      <p>Bringing a wealth of knowledge in web development and WordPress to the table, I am dedicated to demystifying the digital world for my clients. My approach is rooted in the belief that clear understanding fuels better outcomes. By partnering with you, I aim to navigate the complexities of web technology together, ensuring that every solution I provide is not only high-performing and SEO-friendly but also perfectly aligned with your needs. It’s about creating scalable digital experiences that resonate with your audience, powered by informed decisions every step of the way.</p>
    </section>
    <section id="services">
      
    </section>
  </main>
</template>

