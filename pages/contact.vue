<script setup>
import ContactForm from '~/components/ContactForm.vue';
import SocialLinks from '~/components/SocialLinks.vue';
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 py-12">
    <!-- Header -->
    <section class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold text-green-800 mb-4 tracking-tight">
        🌱 Contact Us
      </h1>
      <p class="text-lg text-green-900 opacity-90">
        Have a question, media inquiry, or want to connect?<br />
        Fill out the form or reach us directly.
      </p>
    </section>

    <!-- Contact Form -->
    <div class="mb-12">
      <ContactForm />
    </div>

    <!-- Contact Info Card -->
    <div
      class="mt-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow p-6 text-green-900 text-center"
    >
      <p class="font-semibold text-lg mb-2">
        Reach us directly
      </p>
      <p class="mb-1">
        📧
        <a
          href="mailto:greensproutkenya@gmail.com"
          class="text-blue-700 underline hover:text-blue-900"
        >
          greensproutkenya@gmail.com
        </a>
      </p>
      <p class="mb-3">
        📞
        <a
          href="tel:+254700000000"
          class="text-blue-700 underline hover:text-blue-900"
        >
          +254 111 596 189
        </a>
      </p>

      <!-- Social Links -->
      <div class="mt-4 flex justify-center">
        <SocialLinks />
      </div>
    </div>
  </main>
</template>
